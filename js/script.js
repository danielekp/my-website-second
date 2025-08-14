// DOM Elements
const mobileMenu = document.getElementById('mobile-menu');
const mobileNav = document.getElementById('mobile-nav');
const closeMenu = document.getElementById('close-menu');

// Mobile menu toggle
mobileMenu.addEventListener('click', () => {
    mobileNav.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
});

closeMenu.addEventListener('click', () => {
    mobileNav.classList.remove('active');
    document.body.style.overflow = 'auto'; // Re-enable scrolling
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    populateTechStack();
});
