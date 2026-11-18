// ONNX Demo Canvas functionality (for project2.html - Few Shot Learning)
document.addEventListener('DOMContentLoaded', function() {
    // Only initialize canvas functionality on the few-shot learning page
    if (document.getElementById('few-shot-demo')) {
        initializeFewShotDemo();
    }
});

function initializeFewShotDemo() {
    const canvases = document.querySelectorAll('canvas');
    
    // Initialize each canvas with drawing functionality
    canvases.forEach(canvas => {
        const ctx = canvas.getContext('2d');
        ctx.lineWidth = 7;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.strokeStyle = '#000';
        
        let isDrawing = false;
        let lastX = 0;
        let lastY = 0;
        
        function startDrawing(e) {
            isDrawing = true;
            [lastX, lastY] = getCoordinates(e);
        }
        
        function draw(e) {
            if (!isDrawing) return;
            
            const [x, y] = getCoordinates(e);
            
            ctx.beginPath();
            ctx.moveTo(lastX, lastY);
            ctx.lineTo(x, y);
            ctx.stroke();
            
            [lastX, lastY] = [x, y];
        }
        
        function stopDrawing() {
            isDrawing = false;
        }
        
        function getCoordinates(e) {
            const rect = canvas.getBoundingClientRect();
            const scaleX = canvas.width / rect.width;
            const scaleY = canvas.height / rect.height;
            
            if (e.touches && e.touches[0]) {
                return [
                    (e.touches[0].clientX - rect.left) * scaleX,
                    (e.touches[0].clientY - rect.top) * scaleY
                ];
            }
            
            return [
                (e.clientX - rect.left) * scaleX,
                (e.clientY - rect.top) * scaleY
            ];
        }
        
        // Add event listeners
        canvas.addEventListener('mousedown', startDrawing);
        canvas.addEventListener('mousemove', draw);
        canvas.addEventListener('mouseup', stopDrawing);
        canvas.addEventListener('mouseout', stopDrawing);
        
        // Touch events for mobile
        canvas.addEventListener('touchstart', startDrawing);
        canvas.addEventListener('touchmove', draw);
        canvas.addEventListener('touchend', stopDrawing);
    });
    
    // Add gradient overlay elements to each canvas wrapper
    for (let i = 1; i <= 6; i++) {
        const canvasWrapper = document.getElementById(`canvas${i}`).parentElement;
        const gradientOverlay = document.createElement('div');
        gradientOverlay.className = 'canvas-gradient-overlay';
        gradientOverlay.id = `canvas${i}-overlay`;
        canvasWrapper.appendChild(gradientOverlay);
        
        // Make sure canvas is positioned above the overlay
        const canvas = document.getElementById(`canvas${i}`);
        canvas.style.position = 'relative';
        canvas.style.zIndex = '10';
    }
    
    // Clear canvas buttons
    document.querySelectorAll('.canvas-button').forEach(button => {
        const canvasId = button.getAttribute('data-canvas');
        const canvas = document.getElementById(canvasId);
        
        button.addEventListener('click', () => {
            const ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Also reset the overlay if there is one
            const overlay = document.getElementById(`${canvasId}-overlay`);
            if (overlay) {
                overlay.className = 'canvas-gradient-overlay';
            }
        });
    });
    
    // Run model button
    const runButton = document.getElementById('run-model');
    const loader = document.getElementById('loader');
    
    if (runButton) {
        runButton.addEventListener('click', async () => {
            // Hide the run button
            runButton.style.display = 'none';
            // Show the loader
            loader.style.display = 'block';
            
            // Create error message element if it doesn't exist
            let errorMessageElement = document.getElementById('model-error-message');
            if (!errorMessageElement) {
                errorMessageElement = document.createElement('div');
                errorMessageElement.id = 'model-error-message';
                errorMessageElement.style.color = '#e74c3c';
                errorMessageElement.style.textAlign = 'center';
                errorMessageElement.style.marginTop = '1rem';
                errorMessageElement.style.padding = '0.5rem';
                errorMessageElement.style.display = 'none';
                runButton.parentNode.insertBefore(errorMessageElement, runButton.nextSibling);
            }
            
            try {
                // Hide any previous error message
                errorMessageElement.style.display = 'none';
                
                // Reset all overlays
                for (let i = 1; i <= 6; i++) {
                    const overlay = document.getElementById(`canvas${i}-overlay`);
                    if (overlay) {
                        overlay.className = 'canvas-gradient-overlay';
                    }
                }
                
                // Load the ONNX model
                const modelUrl = "./onnxmodel.onnx";
                const session = await ort.InferenceSession.create(modelUrl);
                
                // Process canvases and create tensors
                const tensors = [];
                const threshold = 10; // Threshold for binarizing the image
                
                // Process all 6 canvases
                for (let i = 1; i <= 6; i++) {
                    const canvas = document.getElementById(`canvas${i}`);
                    
                    // Get image data from canvas
                    const ctx = canvas.getContext('2d');
                    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                    
                    // Process the image data (threshold to binary)
                    const processedData = [];
                    for (let j = 3; j < imageData.data.length; j += 4) {
                        // Take alpha channel and threshold
                        processedData.push(imageData.data[j] > threshold ? 255 : 0);
                    }
                    
                    // Create tensor
                    tensors.push(
                        new ort.Tensor(
                            'float32',
                            new Float32Array(processedData),
                            [1, 1, canvas.width, canvas.height]
                        )
                    );
                }
                
                // Get embeddings for classes (first 3 canvases)
                const classes = [];
                for (let i = 0; i < 3; i++) {
                    // First, get the input name from the model
                    const inputName = session.inputNames[0];
                    
                    // Prepare feeds object with the input tensor
                    const feeds = {};
                    feeds[inputName] = tensors[i];
                    
                    // Run the model
                    const outputMap = await session.run(feeds);
                    
                    // Get the output tensor (first output)
                    const outputName = session.outputNames[0];
                    const outputTensor = outputMap[outputName];
                    
                    classes.push(outputTensor.data);
                }
                
                // Get embeddings for queries (next 3 canvases)
                const queries = [];
                for (let i = 3; i < 6; i++) {
                    // Prepare feeds object with the input tensor
                    const inputName = session.inputNames[0];
                    const feeds = {};
                    feeds[inputName] = tensors[i];
                    
                    // Run the model
                    const outputMap = await session.run(feeds);
                    
                    // Get the output tensor
                    const outputName = session.outputNames[0];
                    const outputTensor = outputMap[outputName];
                    
                    queries.push(outputTensor.data);
                }
                
                // Calculate distances and find closest class for each query
                const distances = queries.map((query) => {
                    let closestClass = 0;
                    let minDistance = Infinity;
                    
                    classes.forEach((cls, index) => {
                        // Calculate Euclidean distance
                        const distance = Math.sqrt(
                            cls.reduce((sum, val, j) => sum + Math.pow(val - query[j], 2), 0)
                        );
                        
                        if (distance < minDistance) {
                            closestClass = index;
                            minDistance = distance;
                        }
                    });
                    
                    return closestClass;
                });
                
                // Define gradient classes for different classes
                const gradientClasses = ['class-gradient-1', 'class-gradient-2', 'class-gradient-3'];
                
                // Apply gradient styles to class canvases (top row)
                for (let i = 0; i < 3; i++) {
                    const overlay = document.getElementById(`canvas${i+1}-overlay`);
                    overlay.className = 'canvas-gradient-overlay ' + gradientClasses[i] + ' show';
                }
                
                // Apply gradient styles to query canvases (bottom row) based on classification
                for (let i = 0; i < 3; i++) {
                    const overlay = document.getElementById(`canvas${i+4}-overlay`);
                    const classIndex = distances[i];
                    overlay.className = 'canvas-gradient-overlay ' + gradientClasses[classIndex] + ' show';
                }
                
            } catch (error) {
                console.error('Error running model:', error);
                
                // Reset all overlays
                for (let i = 1; i <= 6; i++) {
                    const overlay = document.getElementById(`canvas${i}-overlay`);
                    if (overlay) {
                        overlay.className = 'canvas-gradient-overlay';
                    }
                }
                
                // Show error message
                errorMessageElement.textContent = 'Error: Could not load or run the model. Please try again or check if the model file exists.';
                errorMessageElement.style.display = 'block';
                
            } finally {
                // Hide loader
                loader.style.display = 'none';
                // Show run button again
                runButton.style.display = 'block';
            }
        });
    }
}