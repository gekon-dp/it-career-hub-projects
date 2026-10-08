const navMenu = document.querySelector(".nav-menu");
const openNavMenu = document.querySelector("#openButton");
const closeNavMenu = document.querySelector("#closeButton");

const toggleMenu = () => {
  navMenu.classList.toggle("nav-menu-open");
};

openNavMenu.addEventListener("click", (event) => {
  event.stopPropagation();
  toggleMenu();
});

closeNavMenu.addEventListener("click", (event) => {
  event.stopPropagation();
  toggleMenu();
});
