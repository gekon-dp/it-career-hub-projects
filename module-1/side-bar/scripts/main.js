const navMenu = document.querySelector(".nav-menu");
const menuItems = document.querySelectorAll(".nav-menu-item");
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

const accordionData = {
  Home: ["1.1 Shop", "1.2 Contacts", "1.3 About us"],
  Messages: ["Скрытый контент для Messages."],
  Documents: ["Скрытый контент для Documents."],
  Profile: ["Скрытый контент для Profile."],
};

menuItems.forEach((item) => {
  const itemText = item.textContent.trim();

  // Проверяем, есть ли для этого пункта данные в нашем объекте
  if (accordionData[itemText]) {
    // Перестраиваем структуру пункта: превращаем текст в заголовок аккордеона
    item.innerHTML = `<div class="accordion-header">${itemText}</div>`;

    // Создаем и добавляем блоки с контентом
    accordionData[itemText].forEach((text) => {
      const contentDiv = document.createElement("div");
      contentDiv.className = "accordion-content";
      contentDiv.textContent = text;
      item.appendChild(contentDiv);
    });

    // Находим только что созданный заголовок внутри этого пункта
    const header = item.querySelector(".accordion-header");

    // Вешаем событие клика на заголовок
    header.addEventListener("click", (e) => {
      e.stopPropagation(); // Предотвращаем всплытие события

      const isActive = item.classList.contains("active");

      // Закрываем все остальные пункты
      menuItems.forEach((el) => el.classList.remove("active"));

      // Если текущий был закрыт — открываем
      if (!isActive) {
        item.classList.add("active");
      }
    });
  } else {
    // Оборачиваем Empty в заголовок для сохранения одинаковых стилей, но без логики клика
    item.innerHTML = `<div class="accordion-header no-content">${itemText}</div>`;
  }
});
