// ******** IMPORTS **********

// ********** EXECUTION *********

// navbar variables
const headerContainer = document.getElementById('header');
const navContainer = document.getElementById('nav-container');
const navToggle = document.getElementById('nav-toggle');
const nav = document.getElementById('nav');

window.addEventListener('resize', () => {
    if (navContainer.classList.contains('show-nav')) {
        navContainer.classList.remove('show-nav');
        navContainer.style.height = `0`;
        navContainer.style.opacity = `0`;
    }

    const screenWidth = window.innerWidth;
    const scrollHeight = window.pageYOffset;
    if (scrollHeight === 0) {
        headerContainer.classList.remove('fixed');
    } else if (screenWidth > 992) {
        headerContainer.classList.add('fixed');
    } else {
        headerContainer.classList.remove('fixed');
    }
});

window.addEventListener('scroll', () => {
    const screenWidth = window.innerWidth;
    const scrollHeight = window.pageYOffset;
    if (scrollHeight !== 0 && screenWidth > 992) {
        headerContainer.classList.add('fixed');
    } else {
        headerContainer.classList.remove('fixed');
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
