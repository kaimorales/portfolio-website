// Claude-Inspired Unique Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Theme Toggle
    const themeToggle = document.querySelector('.theme-toggle button');
    const body = document.body;
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    const icon = themeToggle.querySelector('i');
    
    if (savedTheme === 'light') {
        body.classList.add('light-theme');
        icon.classList.replace('fa-moon', 'fa-sun');
    }
    
    // Toggle theme on click
    themeToggle.addEventListener('click', function() {
        body.classList.toggle('light-theme');
        
        if (body.classList.contains('light-theme')) {
            localStorage.setItem('theme', 'light');
            icon.classList.replace('fa-moon', 'fa-sun');
        } else {
            localStorage.setItem('theme', 'dark');
            icon.classList.replace('fa-sun', 'fa-moon');
        }
    });
    
    // Fade in message containers on scroll
    const messageContainers = document.querySelectorAll('.message-container');
    
    // Function to check if an element is in viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85
        );
    }
    
    // Function to handle scroll and show elements
    function handleScroll() {
        messageContainers.forEach(container => {
            if (isElementInViewport(container) && !container.classList.contains('visible')) {
                container.classList.add('visible');
            }
        });
    }
    
    // Initial check for elements in viewport
    handleScroll();
    
    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);
});

document.addEventListener('DOMContentLoaded', function() {
    // ... (previous JavaScript code)

    // Preloader
    const preloader = document.querySelector('.preloader');

    window.addEventListener('load', function() {
        setTimeout(function() {
            preloader.classList.add('hide');
        }, 2000); // Hide preloader after 2 seconds (adjust as needed)
    });
});