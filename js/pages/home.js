// ******** IMPORTS **********

// ********** EXECUTION *********

// navbar variables
const navToggle = document.getElementById('nav-toggle');
const nav = document.getElementById('nav');
const navContainer = document.getElementById('nav-container');

window.addEventListener('resize', () => {
    if (navContainer.classList.contains('show-nav')) {
        navContainer.classList.remove('show-nav');
        navContainer.style.height = `0`;
        navContainer.style.opacity = `0`;
    }
});

navToggle.addEventListener('click', () => {
    const navHeight = nav.getBoundingClientRect().height;
    if (!navContainer.classList.contains('show-nav')) {
        navContainer.classList.add('show-nav');
        navContainer.style.height = `${navHeight + 20}px`;
        navContainer.style.opacity = `1`;
    } else {
        navContainer.classList.remove('show-nav');
        navContainer.style.height = `0`;
    }
});
