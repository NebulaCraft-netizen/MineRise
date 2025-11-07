// === Smooth Scroll + Scroll Animations (No Mouse Movement) ===

// Wait until everything is ready
document.addEventListener("DOMContentLoaded", () => {
    // Add fade/slide animations for elements when scrolling
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(el => observer.observe(el));
});
