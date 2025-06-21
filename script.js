// Time-based greeting
window.addEventListener("DOMContentLoaded", () => {
  const greeting = document.getElementById("greeting");
  const hour = new Date().getHours();
  greeting.textContent = hour < 12
    ? "Good Morning!"
    : hour < 17
    ? "Good Afternoon!"
    : "Good Evening!";
});

// Toggle responsive navbar
function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("show");
}

function closeMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.remove("show");
}
``
