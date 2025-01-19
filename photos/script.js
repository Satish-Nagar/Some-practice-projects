// JavaScript for interactive functionality

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submit alert
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    window.location.href = 'https://wa.link/4kzmh3';
});

// Toggle menu
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.add('active');
    closeIcon.style.display = 'block';
    menuIcon.style.display = 'none';
});

closeIcon.addEventListener('click', () => {
    navLinks.classList.remove('active');
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';
});
