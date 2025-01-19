// JavaScript functionality for toggling mobile menu
const menuIcon = document.querySelector('.menu-icon');
const menuClose = document.querySelector('.menu-close');
const navMenu = document.querySelector('.nav-menu');

menuIcon.addEventListener('click', () => {
    navMenu.classList.add('show');
    menuIcon.style.display = 'none'; // Hide menu icon
    menuClose.style.display = 'block'; // Show close icon
});

menuClose.addEventListener('click', () => {
    navMenu.classList.remove('show');
    menuIcon.style.display = 'block'; // Show menu icon
    menuClose.style.display = 'none'; // Hide close icon
});
