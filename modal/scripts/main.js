const openModalBtn = document.querySelector(".open-modal-btn");
const modal = document.querySelector(".modal");
const modalBody = document.querySelector(".modal-body");

// --- Базовые функции управления модальным окном ---

// Функция открытия (принимает конкретное модальное окно)
function openModal(modalElement) {
  modalElement.classList.remove("modal-hidden");
  // Добавляем слушатель ESC только когда окно открыто (экономит ресурсы)
  document.addEventListener("keydown", handleEscClose);
}

// Функция закрытия (принимает конкретное модальное окно)
function closeModal(modalElement) {
  modalElement.classList.add("modal-hidden");
  // Убираем слушатель ESC, когда окно закрыто
  document.removeEventListener("keydown", handleEscClose);
}

// Функция-помощник для закрытия по ESC
function handleEscClose(event) {
  if (event.key === "Escape") {
    // Находим активное (открытое) модальное окно на странице
    const activeModal = document.querySelector(".modal:not(.modal-hidden)");
    if (activeModal) closeModal(activeModal);
  }
}

// --- Навешивание событий (Инициализация) ---

// Открытие по кнопке
openModalBtn.addEventListener("click", () => openModal(modal));

// Закрытие по клику на затемненную область (overlay)
modal.addEventListener("click", () => closeModal(modal));

// Управление кликами ВНУТРИ контента модального окна
modalBody.addEventListener("click", (event) => {
  // Если кликнули по крестику или кнопке Accept
  if (event.target.closest(".close-modal-btn")) {
    closeModal(modal);
    return;
  }
  // Для всего остального контента — запрещаем закрытие
  event.stopPropagation();
});
