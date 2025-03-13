document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-in, .slide-in');
    fadeElements.forEach(el => {
        el.style.opacity = 1;
        el.style.transform = 'none';
    });
});
