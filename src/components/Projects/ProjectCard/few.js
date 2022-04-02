import React from 'react';
import {Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { Tensor, InferenceSession } from "onnxjs";
import DrawableCanvas from 'react-drawable-canvas';

async function test(){
  const session = new InferenceSession();
  const url = "../onnxmodel.onnx";
  await session.loadModel(url);
  //console.log('DONE')
  const input = new Tensor(new Float32Array(254016), 'float32', [252,252,4])
  const outputMap = await session.run([input])
  const outputTensor = outputMap.values().next().value
  //console.log(outputTensor.data)
}

class Few extends React.Component {

  constructor(props) {
    super (props);

    this.myCanvasFirst = React.createRef();
    this.firstButton = React.createRef();

    this.myCanvasSecond = React.createRef();
    this.secondButton = React.createRef();

    this.myCanvasThird = React.createRef();
    this.thirdButton = React.createRef();

    this.myCanvasFourth = React.createRef();
    this.fourthButton = React.createRef();

    this.myCanvasFifth = React.createRef();
    this.fifthButton = React.createRef();

    this.myCanvasSixth = React.createRef();
    this.sixthButton = React.createRef();

    this.clearFirstCanvas = this.clearFirstCanvas.bind(this);

    this.clearSecondCanvas = this.clearSecondCanvas.bind(this);

    this.clearThirdCanvas = this.clearThirdCanvas.bind(this);

    this.clearFourthCanvas = this.clearFourthCanvas.bind(this);

    this.clearFifthCanvas = this.clearFifthCanvas.bind(this);

    this.clearSixthCanvas = this.clearSixthCanvas.bind(this);

    this.runModel = this.runModel.bind(this);

    this.state={
      first:{
        canvasStyle: {
          backgroundColor: 'white',
          borderRadius: '10px',
          borderWidth: '1px',
        },
        lineWidth: 7,
        clear: false,
      },
      second:{
        canvasStyle: {
          backgroundColor: 'white',
          borderRadius: '10px',
          borderWidth: '1px',
        },
        lineWidth: 7,
        clear: false,
      },
      third:{
        canvasStyle: {
          backgroundColor: 'white',
          borderRadius: '10px',
          borderWidth: '1px',
        },
        lineWidth: 7,
        clear: false,
      },
      fourth:{
        canvasStyle: {
          backgroundColor: 'white',
          borderRadius: '10px',
          borderWidth: '1px',
        },
        lineWidth: 7,
        clear: false,
      },
      fifth:{
        canvasStyle: {
          backgroundColor: 'white',
          borderRadius: '10px',
          borderWidth: '1px',
        },
        lineWidth: 7,
        clear: false,
      },
      sixth:{
        canvasStyle: {
          backgroundColor: 'white',
          borderRadius: '10px',
          borderWidth: '1px',
        },
        lineWidth: 7,
        clear: false,
      },
      loading: false
    }
  }

  clearFirstCanvas(){
    const canvas = this.myCanvasFirst.current.state.canvas;
    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
  }

  clearSecondCanvas(){
    const canvas = this.myCanvasSecond.current.state.canvas;
    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
  }

  clearThirdCanvas(){
    const canvas = this.myCanvasThird.current.state.canvas;
    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
  }

  clearFourthCanvas(){
    const canvas = this.myCanvasFourth.current.state.canvas;
    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
  }

  clearFifthCanvas(){
    const canvas = this.myCanvasFifth.current.state.canvas;
    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
  }

  clearSixthCanvas(){
    const canvas = this.myCanvasSixth.current.state.canvas;
    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
  }

  async runModel(){
    this.setState({loading: true})
    const threshold = 10;
    const canvasFirst = this.myCanvasFirst.current.state.canvas;
    const first = canvasFirst.getContext('2d').getImageData(0,0,canvasFirst.width,canvasFirst.height)
    const f = []
    for (var i = 3; i < first.data.length; i+=4) {
      f.push(first.data[i] > threshold ? 255 : 0)
    }
    const inputFirst = new Tensor(new Float32Array(f), "float32", [1,1,252,252]);

    const canvasSecond = this.myCanvasSecond.current.state.canvas;
    const second = canvasSecond.getContext('2d').getImageData(0,0,canvasFirst.width,canvasFirst.height)
    const s = []
    for (var i = 3; i < second.data.length; i+=4) {
      s.push(second.data[i] > threshold ? 255 : 0)
    }
    const inputSecond = new Tensor(new Float32Array(s), "float32", [1,1,252,252]);

    const canvasThird = this.myCanvasThird.current.state.canvas;
    const third = canvasThird.getContext('2d').getImageData(0,0,canvasFirst.width,canvasFirst.height)
    const t = []
    for (var i = 3; i < third.data.length; i+=4) {
      t.push(third.data[i] > threshold ? 255 : 0)
    }
    const inputThird = new Tensor(new Float32Array(t), "float32", [1,1,252,252]);

    const canvasFourth = this.myCanvasFourth.current.state.canvas;
    const fourth = canvasFourth.getContext('2d').getImageData(0,0,canvasFirst.width,canvasFirst.height)
    const fo = []
    for (var i = 3; i < fourth.data.length; i+=4) {
      fo.push(fourth.data[i] > threshold ? 255 : 0)
    }
    const inputFourth = new Tensor(new Float32Array(fo), "float32", [1,1,252,252]);

    const canvasFifth = this.myCanvasFifth.current.state.canvas;
    const fifth = canvasFifth.getContext('2d').getImageData(0,0,canvasFirst.width,canvasFirst.height)
    const fi = []
    for (var i = 3; i < fifth.data.length; i+=4) {
      fi.push(fifth.data[i] > threshold ? 255 : 0)
    }
    const inputFifth = new Tensor(new Float32Array(fi), "float32", [1,1,252,252]);

    const canvasSixth = this.myCanvasSixth.current.state.canvas;
    const sixth = canvasSixth.getContext('2d').getImageData(0,0,canvasFirst.width,canvasFirst.height)
    const si = []
    for (var i = 3; i < sixth.data.length; i+=4) {
      si.push(sixth.data[i] > threshold ? 255 : 0)
    }
    const inputSixth = new Tensor(new Float32Array(si), "float32", [1,1,252,252]);

    const session = new InferenceSession();
    const url = "../onnxmodel.onnx";
    await session.loadModel(url);

    const outputMapOne = await session.run([inputFirst])
    const outputTensorFirst = outputMapOne.values().next().value

    const outputMapSecond = await session.run([inputSecond])
    const outputTensorSecond = outputMapSecond.values().next().value

    const outputMapThree = await session.run([inputThird])
    const outputTensorThird = outputMapThree.values().next().value

    let classes = [outputTensorFirst.data, outputTensorSecond.data, outputTensorThird.data]

    const outputMapFourth = await session.run([inputFourth])
    const outputTensorFourth = outputMapFourth.values().next().value

    const outputMapFifth = await session.run([inputFifth])
    const outputTensorFifth = outputMapFifth.values().next().value

    const outputMapSixth = await session.run([inputSixth])
    const outputTensorSixth = outputMapSixth.values().next().value

    let queries = [outputTensorFourth.data, outputTensorFifth.data, outputTensorSixth.data]

    let distances = [{n: 0, dist: 0},{n: 0, dist: 0},{n: 0, dist: 0}]

    for(var k=0; k<queries.length;k++){

      for(var i=0; i<classes.length;i++){

        let cDist = 0;
        for(var j=0; j<outputTensorSixth.data.length;j++){
          cDist += (queries[k][j]-classes[i][j])*(queries[k][j]-classes[i][j])
        }
        cDist = Math.sqrt(cDist)

        if(cDist<distances[k].dist || distances[k].dist===0){
          distances[k].dist = cDist
          distances[k].n = i
        }
      }
    }

    let color = {
      0: 'green',
      1: 'red',
      2: 'blue'
    }

    this.setState({first:{
                    canvasStyle: {
                      backgroundColor: 'white',
                      borderRadius: '10px',
                      borderWidth: '5px',
                      borderColor: 'green',
                      borderStyle: 'solid'
                    },
                    lineWidth: 7,
                    clear: false,
                  },
                  second:{
                    canvasStyle: {
                      backgroundColor: 'white',
                      borderRadius: '10px',
                      borderWidth: '5px',
                      borderColor: 'red',
                      borderStyle: 'solid'
                    },
                    lineWidth: 7,
                    clear: false,
                  },
                  third:{
                    canvasStyle: {
                      backgroundColor: 'white',
                      borderRadius: '10px',
                      borderWidth: '5px',
                      borderColor: 'blue',
                      borderStyle: 'solid'
                    },
                    lineWidth: 7,
                    clear: false,
                  },
                  fourth:{
                    canvasStyle: {
                      backgroundColor: 'white',
                      borderRadius: '10px',
                      borderWidth: '5px',
                      borderColor: color[distances[0].n],
                      borderStyle: 'solid'
                    },
                    lineWidth: 7,
                    clear: false,
                  },
                  fifth:{
                    canvasStyle: {
                      backgroundColor: 'white',
                      borderRadius: '10px',
                      borderWidth: '5px',
                      borderColor: color[distances[1].n],
                      borderStyle: 'solid'
                    },
                    lineWidth: 7,
                    clear: false,
                  },
                  sixth:{
                    canvasStyle: {
                      backgroundColor: 'white',
                      borderRadius: '10px',
                      borderWidth: '5px',
                      borderColor: color[distances[2].n],
                      borderStyle: 'solid'
                    },
                    lineWidth: 7,
                    clear: false,
                  },
                  loading: false})
  }

  render() {

    return (
      <>
      <div className="giochino">
      <Row className="justify-content-center" style={{marginTop: '30px'}}>
        <Col xs={10} sm={9} md={4} lg={4} xl={3}>
          <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <div style={{width: '252px', height: '252px'}}>
          <DrawableCanvas ref={this.myCanvasFirst} {...this.state.first}/>
        </div>
        </Col>
          <div ref={this.firstButton} onClick={this.clearFirstCanvas} className="fewButton unselectable">Clear</div>
        </Row>
        </Col>
        <Col xs={10} sm={9} md={4} lg={4} xl={3}>
          <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} className="justify-content-center">
            <div style={{width: '252px', height: '252px'}}>
              <DrawableCanvas ref={this.myCanvasSecond} {...this.state.second}/>
            </div>
          </Col>
          <div ref={this.secondButton} onClick={this.clearSecondCanvas} className="fewButton unselectable">Clear</div>
        </Row>
        </Col>
        <Col xs={10} sm={9} md={4} lg={4} xl={3}>
          <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <div style={{width: '252px', height: '252px'}}>
            <DrawableCanvas ref={this.myCanvasThird} {...this.state.third}/>
          </div>
        </Col>
          <div ref={this.thirdButton} onClick={this.clearThirdCanvas} className="fewButton unselectable">Clear</div>
        </Row>
        </Col>
      </Row>
      <p className='indications'>Draw in the upper canvas the target characters (classes)</p>
      <div className="line"/>
      <p className='indications'>Draw in the canvas below the characters to be labeled</p>
      <Row className="justify-content-center" style={{marginTop: '30px'}}>
        <Col xs={10} sm={9} md={4} lg={4} xl={3}>
          <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <div style={{width: '252px', height: '252px'}}>
          <DrawableCanvas ref={this.myCanvasFourth} {...this.state.fourth}/>
        </div>
        </Col>
          <div ref={this.fourthButton} onClick={this.clearFourthCanvas} className="fewButton unselectable">Clear</div>
        </Row>
        </Col>
        <Col xs={10} sm={9} md={4} lg={4} xl={3}>
          <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} className="justify-content-center">
            <div style={{width: '252px', height: '252px'}}>
          <DrawableCanvas ref={this.myCanvasFifth} {...this.state.fifth}/>
        </div>
        </Col>
          <div ref={this.fifthButton} onClick={this.clearFifthCanvas} className="fewButton unselectable">Clear</div>
        </Row>
        </Col>
        <Col xs={10} sm={9} md={4} lg={4} xl={3}>
          <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <div style={{width: '252px', height: '252px'}}>
            <DrawableCanvas ref={this.myCanvasSixth} {...this.state.sixth}/>
          </div>
        </Col>
          <div ref={this.sixthButton} onClick={this.clearSixthCanvas} className="fewButton unselectable">Clear</div>
        </Row>
        </Col>
      </Row>
    <Row className="justify-content-center">
      {!this.state.loading &&
      <div ref={this.runTheModel} className="runTheModel unselectable" onClick={this.runModel}> RUN THE MODEL </div>}
      {this.state.loading &&
       <div className="loader"></div> }
    </Row>
    </div>
    <hr/>
        <p>
          The <a className="keywords"> Omniglot dataset</a> is used for training (a collection of 19280 images of 964 characters from 30 alphabets. There are 20 images for each of the 964 characters in the dataset)
        </p>
          <p>
            We follow the <a className="keywords">meta-learning</a> approach, i.e. the network learn how to learn new tasks using multiple training examples of tasks.
            The meta-learning is performed using episodic training; in each episode one training batch is processed.<br/>
          </p>
          <p>
            The <a className="keywords">embedding CNN</a> is a convolutional neural network whose aim is to embed images into a lower-dimensional space.<br/>
            The lower euclidean distance between the point to be labeled and the classes define the prediction.
          </p>
        <p className="parag">The game up there was implemented exporting the PyTorch model as onnx model (runnable on javascript with
        onnxjs package). The first line of canvas defines the classes, while the second line is for the characters to be labeled.
        The predicition is done looking for the lowest euclidean distance between 64-dimensional array of the character and the 64-dimensional
        arrays of the classes.
      </p>
      </>
    )
  }
}

export default Few;
