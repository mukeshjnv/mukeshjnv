// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll to top button
let scrollToTopBtn = document.getElementById("scrollToTop");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

scrollToTopBtn.addEventListener("click", function(){
    window.scrollTo({top: 0, behavior: 'smooth'});
});

// Add animation to sections when they come into view
const sections = document.querySelectorAll('.section');

const options = {
    root: null,
    threshold: 0.1,
    rootMargin: "0px"
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
        }
    });
}, options);

sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = "translateY(50px)";
    section.style.transition = "opacity 0.5s, transform 0.5s";
    observer.observe(section);
});

// Add this code at the end of the file

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navbar = document.getElementById('navbar');

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('#navbar a').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
    });
});
