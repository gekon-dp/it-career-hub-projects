// Создание диалогового окна. Создать кнопку для открытия модального
// диалогового окна(окно открывается на весь экран). В этом окне будет
// форма с 4мя инпутами (имя фамилия емейл и пароль), заполнив форму
// пользователь нажимает на кнопку зарегистрироваться, затем открывается
// новое вложенное модальное окно подтверждения, в котором расположена
// кнопка  подтвердить. Модальные окна должны закрываться по клавише esc

const openModalBtn = document.querySelector(".open-modal-btn");
const openInsideModalBtn = document.querySelector(".open-inside-modal-btn");
const modal = document.querySelector(".modal");
const insideModal = document.querySelector(".inside-modal");
const form = document.querySelector(".login-form");

// Массив-стек для отслеживания открытых окон (LIFO)
let openModals = [];

// Функция для добавления окон в стек при открытии
function openModalHandler(modalElement, hiddenClass) {
  modalElement.classList.remove(hiddenClass);
  openModals.push({ element: modalElement, hiddenClass: hiddenClass });
}

// Функция для закрытия самого верхнего активного окна
function closeTopModal() {
  if (openModals.length === 0) return;
  const topModal = openModals.pop();
  topModal.element.classList.add(topModal.hiddenClass);
}

// Открытие окон
openModalBtn.addEventListener("click", () =>
  openModalHandler(modal, "modal-hidden"),
);
openInsideModalBtn.addEventListener("click", () =>
  openModalHandler(insideModal, "inside-modal-hidden"),
);

// Единый обработчик ВСЕХ кликов
document.addEventListener("click", (event) => {
  if (openModals.length === 0) return;

  const currentTop = openModals[openModals.length - 1];
  const target = event.target;

  // Закрытие по крестику ИЛИ прямо по фоновой подложке
  if (
    target.classList.contains("close-x-btn") ||
    target === currentTop.element
  ) {
    closeTopModal();
  }
});

// Закрытие по клавише Escape
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeTopModal();
});

// Обработка формы
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Форма отправлена без перезагрузки!");
});
