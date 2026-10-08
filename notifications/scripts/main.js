// Реализовать всплывающие уведомления: уведомление должно вызываться
// с помощью функции “конструктора” уведомления, которая принимает
// название, текст и тип уведомления (успех, предупреждение, ошибка).

// Сверстать форму, после отправки которой появляется уведомление
// о том, что заказ успешно создан, а также появляются 3 кнопки:
// “Заказ оплачен”, “Заказ отправлен”, “Заказ получен”, при нажатии
// на которые появляется уведомление с соответствующим сообщением.

// ==========================================
// 1. VARIABLES
// ==========================================
const form = document.querySelector("form");
const orderBtnsBlock = document.querySelector(".order-btns");
const notificationsContainer = document.querySelector(
  ".notifications-container",
);
// Кнопки смены статуса заказа
const paidBtn = document.querySelector(".paid-btn");
const sentBtn = document.querySelector(".sent-btn");
const recievedBtn = document.querySelector(".recieved-btn");
const errorBtn = document.querySelector(".error-btn");

// ==========================================
// 2. CONSTRUCTOR & LOGIC
// ==========================================
class Notifications {
  // Хранилище всех активных объектов уведомлений
  static notificationsList = [];

  constructor(title, type, info) {
    this.id = Math.random();
    this.title = title;
    this.type = type; // "success" | "warning" | "error" | "info"
    this.info = info;

    // Сохраняем экземпляр в массив
    Notifications.notificationsList.push(this);
    // Добавляем элемент на страницу
    Notifications.renderNotifications(this);
  }

  // Принимает объект нового уведомления и точечно рендерит его в DOM
  static renderNotifications(newNotif) {
    if (!newNotif) return;

    const notifElement = document.createElement("div");
    notifElement.className = `notification-item ${newNotif.type}`;
    // Вешаем id на дата-атрибут самой карточки для последующего поиска
    notifElement.setAttribute("data-id", newNotif.id);
    notifElement.innerHTML = `
        <h4>${newNotif.title}</h4>
        <p>${newNotif.info}</p>
        <button class="notification-close">&times;</button>
    `;

    // Добавляем плашку в контейнер
    notificationsContainer.prepend(notifElement);
    // Автоматически прокручиваем контейнер вниз, чтобы видеть новые уведомления
    notificationsContainer.scrollTop = 0;
  }

  // Удаление уведомления с анимацией уезда и фильтрацией массива
  static deleteNotifications(id) {
    // Находим элемент в DOM по его уникальному ID
    const notifElement = notificationsContainer.querySelector(
      `[data-id="${id}"]`,
    );

    if (notifElement) {
      // 1. Добавляем CSS-класс анимации скрытия (уезд вправо)
      notifElement.classList.add("hide");

      notifElement.addEventListener(
        "animationend",
        () => {
          Notifications.notificationsList =
            Notifications.notificationsList.filter((notif) => notif.id !== id);
          notifElement.remove();
        },
        { once: true },
      );
    }
  }
}

// ==========================================
// 3. LISTENERS
// ==========================================
// События клика на крестик
notificationsContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("notification-close")) {
    // Находим родительскую карточку, в которой лежит крестик
    const parentCard = event.target.closest(".notification-item");
    // Извлекаем id из data-id атрибута и приводим к числу
    const notifId = Number(parentCard.dataset.id);
    // Запускаем удаление по id
    Notifications.deleteNotifications(notifId);
  }
});

// Обработка отправки формы через событие submit
form.addEventListener("submit", (event) => {
  event.preventDefault();
  // Создаем уведомление об успешном создании заказа
  new Notifications("Успех", "success", "Заказ успешно создан!");
  // Показываем блок со всеми кнопками управления статусом
  orderBtnsBlock.classList.remove("hidden");
  // Сбрасываем заполненные поля формы
  form.reset();
});

// Обработчики кликов для кнопок изменения статуса заказа
// paidBtn.addEventListener("click", () => {
//   new Notifications("Заказ", "create", "Заказ успешно создан");
// });

paidBtn.addEventListener("click", () => {
  new Notifications("Оплата", "create", "Заказ успешно оплачен");
});

sentBtn.addEventListener("click", () => {
  new Notifications("Доставка", "warning", "Заказ передан в службу доставки");
});

recievedBtn.addEventListener("click", () => {
  new Notifications("Статус", "info", "Заказ успешно получен покупателем");
});

// Обработчик для тестирования ошибки
errorBtn.addEventListener("click", () => {
  new Notifications("Ошибка", "error", "Произошел сбой при обработке запроса");
});
