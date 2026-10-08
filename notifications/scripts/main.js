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
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  new Notifications("Успех", "success", "Заказ успешно создан!");
  orderBtnsBlock.classList.remove("hidden");
  form.reset();
});
