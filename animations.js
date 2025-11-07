// ===========================================
// MineRise Advanced Animations (Lunar Style)
// ===========================================

// Load AOS (Animate On Scroll)
const aosCSS = document.createElement("link");
aosCSS.rel = "stylesheet";
aosCSS.href = "https://unpkg.com/aos@2.3.4/dist/aos.css";
document.head.appendChild(aosCSS);

const aosScript = document.createElement("script");
aosScript.src = "https://unpkg.com/aos@2.3.4/dist/aos.js";
aosScript.onload = () => {
  AOS.init({
    duration: 1100, // animation speed
    offset: 150,    // when animation starts while scrolling
    easing: "ease-in-out-cubic",
    once: false,    // animate again if scrolled back
  });
};
document.head.appendChild(aosScript);

// -------------------------------
// Page Fade-in Loading Animation
// -------------------------------
document.addEventListener("DOMContentLoaded", () => {
  // Add overlay
  const overlay = document.createElement("div");
  overlay.id = "page-loader";
  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.background = "linear-gradient(to bottom right, #0f172a, #1a2333)";
  overlay.style.display = "flex";
  overlay.style.alignItems = "center";
  overlay.style.justifyContent = "center";
  overlay.style.zIndex = "9999";
  overlay.innerHTML = `
    <div style="text-align:center;">
      <div class="loader-circle" style="
        border: 6px solid #1e293b;
        border-top: 6px solid #0ea5e9;
        border-radius: 50%;
        width: 70px;
        height: 70px;
        animation: spin 1.2s linear infinite;
        margin: auto;">
      </div>
      <p style="margin-top:20px; color:#f8fafc; font-family:'Poppins',sans-serif; letter-spacing:1px;">
        Loading MineRise...
      </p>
    </div>
  `;
  document.body.appendChild(overlay);

  // Fade page in after delay
  document.body.style.opacity = "0";
  document.body.style.transition = "opacity 1.1s ease-in-out";

  window.addEventListener("load", () => {
    setTimeout(() => {
      overlay.style.opacity = "0";
      overlay.style.transition = "opacity 0.8s ease";
      document.body.style.opacity = "1";
      setTimeout(() => overlay.remove(), 800);
    }, 1000);
  });
});

// -------------------------------------------
// Automatically Assign Scroll Animations
// -------------------------------------------
window.addEventListener("load", () => {
  const elements = document.querySelectorAll(
    "h1, h2, h3, p, img, div, section, article, footer, header, a"
  );

  const animations = ["fade-up", "fade-down", "fade-left", "fade-right", "zoom-in"];

  elements.forEach((el, i) => {
    const chosen = animations[i % animations.length];
    el.setAttribute("data-aos", chosen);
  });
});

// -----------------------------
// CSS keyframes for loader
// -----------------------------
const style = document.createElement("style");
style.innerHTML = `
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`;
document.head.appendChild(style);
