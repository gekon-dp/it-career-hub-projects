const navMenu = document.querySelector(".nav-menu");
const openNavMenu = document.querySelector("#openButton");
const closeNavMenu = document.querySelector("#closeButton");
const modalOverlay = document.querySelector(".overlay");

const toggleMenu = () => {
  navMenu.classList.toggle("nav-menu-open");
  modalOverlay.classList.toggle("overlay-hidden");
};

openNavMenu.addEventListener("click", (event) => {
  event.stopPropagation();
  toggleMenu();
});

closeNavMenu.addEventListener("click", (event) => {
  event.stopPropagation();
  toggleMenu();
});

// 1.Закрытие меню по оклику
modalOverlay.addEventListener("click", (event) => {
  event.stopPropagation();
  toggleMenu();
});

// 2.Добавить подпункты меню таким образом чтобы при клике на
// любой пункт меню снизу появились еще два-три подраздела.
