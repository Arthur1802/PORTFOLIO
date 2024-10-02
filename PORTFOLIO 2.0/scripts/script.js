// Define height of main section based on the navbar height
const main = document.querySelector('main');
const header = document.querySelector('header');
const navHeight = header.offsetHeight;

main.style.paddingTop = `${navHeight + (navHeight * 0.5)}px`;

// Navbar button click - Activate button
const navBtns = document.querySelectorAll('header nav ul li a');

navBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    navBtns.forEach(btn => btn.classList.remove('active'));
    btn.classList.add('active');
  });
});

// Define box-shadow for the navbar when at the top of the page
const nav = document.querySelector('header');
const nav_img = document.querySelector('header nav .logo');

window.addEventListener('scroll', () => {
    if (window.scrollY > navHeight) {
        nav.style.backdropFilter = 'blur(10px)';
        nav.style.webkitBackdropFilter = 'blur(10px)';
        nav.style.background = 'transparent';
        nav.style.boxShadow = 'none';
        nav.style.padding = '0 100px';
        nav.style.height = '100px';
        nav_img.style.transform = 'scale(1.25)';
    }
    
    else {
        nav.style.boxShadow = '0 0 1rem rgba(0, 0, 0, 0.1)';
        nav.style.backdropFilter = 'none';
        nav.style.webkitBackdropFilter = 'none';
        nav.style.background = 'var(--primary-bg-color)';
        nav.style.height = 'max-content';
        nav.style.padding = '0 4rem';
        nav_img.style.transform = 'scale(1)';
    }
});
