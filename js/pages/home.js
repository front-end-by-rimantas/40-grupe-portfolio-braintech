// ******** IMPORTS **********

// ********** EXECUTION *********

// variables
const headerContainer = document.getElementById('header');
const navContainer = document.getElementById('nav-container');
const navToggle = document.getElementById('nav-toggle');
const nav = document.getElementById('nav');
const scrollBtn = document.getElementById('scroll-btn');

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
    // calculate window width and distance from page top
    const screenWidth = window.innerWidth;
    const scrollHeight = window.pageYOffset;
    // add fixed header on scroll
    if (scrollHeight !== 0 && screenWidth > 992) {
        headerContainer.classList.add('fixed');
    } else {
        headerContainer.classList.remove('fixed');
    }

    // add scroll to top button
    if(scrollHeight > 200) {
        scrollBtn.classList.add('show-btn');
    } else {
        scrollBtn.classList.remove('show-btn');
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
