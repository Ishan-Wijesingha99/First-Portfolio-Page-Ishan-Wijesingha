
// adding functionality to the hamburger navbar icon
const toggleButton = document.querySelector('.toggle-button');

const navbar = document.querySelector('.nav-bar');

toggleButton.addEventListener('click', function() {
    navbar.classList.toggle('nav-bar-active');
})

