document.addEventListener("DOMContentLoaded", function() {
    new Typed("#typed-text", {
        strings: ["Welcome to My Portfolio", "It's me Ujjal Koirala", "I'm a Data Science and ML Enthusiast"],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
    });
});

particlesJS.load('particles-js', 'particles.json', function() {
    console.log('particles.js loaded - callback');
});
