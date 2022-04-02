// select toggle button and links class
const navToggleBtn = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

// add a click event listener to the toggle button
navToggleBtn.addEventListener('click', function() {
    links.classList.toggle('show-links')
});