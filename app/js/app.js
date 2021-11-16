const menu = document.querySelector(".menu");
const hamburger = document.querySelector(".hamburger");

// open menu mobile when click hamburger icon
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
});
