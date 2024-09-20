// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
document.addEventListener('DOMContentLoaded', () => {
    const aboutUsText = document.querySelector('.aboutUs-text');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                aboutUsText.classList.add('show');
                observer.unobserve(entry.target); // Stop observing once the animation is triggered
            }
        });
    }, {
        threshold: 0.5 // Trigger when 50% of the element is in view
    });

    observer.observe(aboutUsText);
});
document.addEventListener('DOMContentLoaded', function () {
    let serviceItems = document.querySelectorAll('.service-item');

    let observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target); // Stop observing once the animation has been triggered
            }
        });
    }, {
        threshold: 0.2 // Adjust to determine when the animation should start (0.2 means 20% of the element should be visible)
    });

    serviceItems.forEach(item => {
        observer.observe(item);
    });
});

window.addEventListener('scroll', function () {
    const headers = document.querySelectorAll('h1');

    headers.forEach(header => {
        const headerPosition = header.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;

        if (headerPosition < screenPosition) {
            header.classList.add('visible');
        }
    });
});

window.addEventListener('scroll', function () {
    const button = document.querySelector('.button2');
    const buttonPosition = button.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

    if (buttonPosition < screenPosition) {
        button.classList.add('visible');
    }
});
document.querySelector('.menu-button').addEventListener('click', function () {
    const navbar = document.querySelector('.sidebar-ul');
    const icon = this.querySelector('i');

    // Toggle the sidebar visibility
    navbar.classList.toggle('active');

    // Toggle between the burger and 'X' icon
    if (navbar.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Show or hide the button based on scroll position
window.onscroll = function () {
    const scrollBtn = document.getElementById('scrollToTopBtn');
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
};

// Scroll to the top when the button is clicked
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
