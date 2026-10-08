// Реализовать всплывающие уведомления: уведомление должно вызываться
// с помощью функции “конструктора” уведомления, которая принимает
// название, текст и тип уведомления (успех, предупреждение, ошибка).

// Сверстать форму, после отправки которой появляется уведомление
// о том, что заказ успешно создан, а также появляются 3 кнопки:
// “Заказ оплачен”, “Заказ отправлен”, “Заказ получен”, при нажатии
// на которые появляется уведомление с соответствующим сообщением.

// 1.varibales
// 2.listeners
// 3.constructor
// {
//   id: Number | String,
//   title: String,
//   type: String,
//   info: String,
// }
//

const form = document.querySelector("form");
const orderBtnsBlock = document.querySelector(".order-btns");
const notificationsContainer = document.querySelector(
  ".notifications-container",
);
const paidBtn = document.querySelector(".paid-btn");
const sentBtn = document.querySelector(".sent-btn");
const recievedBtn = document.querySelector(".recieved-btn");

class Notifications {
  static notificationsList = [];

  constructor(title, type, info) {
    this.id = Math.random();
    this.title = title;
    this.type = type;
    this.info = info;

    Notifications.notificationsList.push(this);
    Notifications.renderNotifications();
  }

  static renderNotifications() {
    notificationsContainer.innerHTML = "";
    Notifications.notificationsList.forEach((notif) => {
      const notifElement = document.createElement("div");
      notifElement.className = `notification-item ${notif.type}`;
      notifElement.innerHTML = `
                <h4>${notif.title}</h4>
                <p>${notif.info}</p>
            `;
      notificationsContainer.appendChild(notifElement);
    });
  }

  static renderNotifications() {
    notificationsContainer.innerHTML = "";
    Notifications.notificationsList.forEach((notif) => {
      const notifElement = document.createElement("div");
      notifElement.className = `notification-item ${notif.type}`;
      // Добавляем атрибут
      notifElement.setAttribute("data-id", notif.id);
      notifElement.innerHTML = `
            <h4>${notif.title}</h4>
            <p>${notif.info}</p>
            <button class="notification-close">&times;</button>
        `;
      notificationsContainer.appendChild(notifElement);
    });
  }

  static deleteNotifications(id) {
    Notifications.notificationsList = Notifications.notificationsList.filter(
      (notif) => notif.id !== id,
    );
    Notifications.renderNotifications();
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  new Notifications("Успех", "success", "Заказ успешно создан!");
  orderBtnsBlock.classList.remove("hidden");
  form.reset();
});

paidBtn.addEventListener("click", () => {
  new Notifications("Оплата", "success", "Заказ успешно оплачен");
});

sentBtn.addEventListener("click", () => {
  new Notifications("Доставка", "warning", "Заказ передан в службу доставки");
});

recievedBtn.addEventListener("click", () => {
  new Notifications("Статус", "success", "Заказ успешно получен покупателем");
});

notificationsContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("notification-close")) {
    const parentCard = event.target.closest(".notification-item");
    const notifId = Number(parentCard.dataset.id);
    Notifications.deleteNotifications(notifId);
  }
});
