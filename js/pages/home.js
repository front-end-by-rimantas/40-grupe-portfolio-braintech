// ******** IMPORTS **********

// ********** EXECUTION *********

// Navbar
const navToggle = document.getElementById('nav-toggle');
const nav = document.getElementById('nav');
const navContainer = document.getElementById('nav-container');

navToggle.addEventListener('click', () => {
    const navHeight = nav.getBoundingClientRect().height;
    if (!navContainer.classList.contains('show-nav')) {
        navContainer.classList.add('show-nav');
        navContainer.style.height = `${navHeight + 20}px`;
    } else {
        navContainer.classList.remove('show-nav');
        navContainer.style.height = `0`;
    }
});
