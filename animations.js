// ===============================
// MineRise Animations by Dev Team
// ===============================

// Wait for page to load
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
  AOS.init({
    duration: 1000,
    offset: 100,
    easing: "ease-in-out",
    once: false,
  });
});

// Smooth fade-in on page load
document.addEventListener("DOMContentLoaded", () => {
  document.body.style.opacity = "0";
  document.body.style.transition = "opacity 1.2s ease-in-out";
  setTimeout(() => {
    document.body.style.opacity = "1";
  }, 100);
});

// Parallax mouse movement
document.addEventListener("mousemove", (e) => {
  document.querySelectorAll(".animate-move").forEach((layer) => {
    const speed = layer.getAttribute("data-speed") || 3;
    const x = (window.innerWidth - e.pageX * speed) / 150;
    const y = (window.innerHeight - e.pageY * speed) / 150;
    layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
});
