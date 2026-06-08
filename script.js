const menuToggle = document.getElementById('menuToggle');
const siteNav = document.getElementById('siteNav');
const navLinks = siteNav.querySelectorAll('a');

menuToggle.addEventListener('click', () => {
    siteNav.classList.toggle('open');
    menuToggle.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        siteNav.classList.remove('open');
        menuToggle.classList.remove('active');
    });
});

window.addEventListener('scroll', () => {
    if (siteNav.classList.contains('open')) {
        siteNav.classList.remove('open');
        menuToggle.classList.remove('active');
    }
});
