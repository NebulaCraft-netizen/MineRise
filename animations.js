// ===============================
// MineRise Universal Animations
// ===============================

// Load AOS dynamically (Animate On Scroll)
const aosCSS = document.createElement("link");
aosCSS.rel = "stylesheet";
aosCSS.href = "https://unpkg.com/aos@2.3.4/dist/aos.css";
document.head.appendChild(aosCSS);

const aosScript = document.createElement("script");
aosScript.src = "https://unpkg.com/aos@2.3.4/dist/aos.js";
aosScript.onload = () => {
  AOS.init({
    duration: 1000,
    offset: 100,
    easing: "ease-in-out",
    once: false,
  });
};
document.head.appendChild(aosScript);

// Smooth fade-in for entire page
document.addEventListener("DOMContentLoaded", () => {
  document.body.style.opacity = "0";
  document.body.style.transition = "opacity 1.2s ease-in-out";
  setTimeout(() => {
    document.body.style.opacity = "1";
  }, 100);
});

// Parallax effect (mouse move)
document.addEventListener("mousemove", (e) => {
  document.querySelectorAll("h1, h2, h3, p, img, a, div").forEach((el, index) => {
    const speed = (index % 5) + 1;
    const x = (window.innerWidth - e.pageX * speed) / 300;
    const y = (window.innerHeight - e.pageY * speed) / 300;
    el.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
});

// Auto-assign scroll animations to visible elements
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      entry.target.style.transition = "all 1s ease";
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
});

document.querySelectorAll("h1, h2, h3, p, img, div, section, article").forEach((el, i) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(50px)";
  observer.observe(el);
});
