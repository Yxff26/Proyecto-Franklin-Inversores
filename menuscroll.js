// Cod header responsive
const nav = document.getElementById('nav-bar');

window.addEventListener('scroll', function() {
    if (window.scrollY > 10) { 
        nav.classList.add('scrolled'); 
    } else {
        nav.classList.remove('scrolled'); 
    }
});

