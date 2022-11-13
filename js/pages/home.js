// IMPORTS

// EXECUTION

const navToggle = document.getElementById('nav-toggle');
const navContainer = document.getElementById('nav');

navToggle.addEventListener('click', () => {
    navContainer.classList.toggle('show-nav');
});
