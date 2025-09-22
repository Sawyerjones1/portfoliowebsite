//mobile menu
function toggleMenu() {
    const menu = document.querySelector(".mm-links");
    const icon = document.querySelector(".mm-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");  
}
//show email
document.addEventListener("DOMContentLoaded", () => {
    const emailButton = document.getElementById("cc-email");
    const title = document.getElementById("cc-title");
  
    emailButton.addEventListener("mouseenter", () => {
      title.textContent = "sawyerjones513@gmail.com";
    });
  
    emailButton.addEventListener("mouseleave", () => {
      title.textContent = "Contact Me";
    });
  });