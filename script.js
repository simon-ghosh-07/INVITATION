document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.card');
    fadeElements.forEach(el => {
        el.style.opacity = 1;
        el.style.transform = 'none';
    });
});
