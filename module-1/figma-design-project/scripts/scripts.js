document.addEventListener("DOMContentLoaded", () => {
  const cookieSection = document.querySelector(".cookies");
  const acceptBtn = document.getElementById("cookie-accept-btn");
  const rejectBtn = document.getElementById("cookie-reject-btn");

  const savedChoice = localStorage.getItem("cookieChois");

  // Используем класс для скрытия при загрузке
  if (savedChoice && cookieSection) {
    cookieSection.classList.add("is-hidden");
  }

  const whatCookieChoice = (status) => {
    localStorage.setItem("cookieChois", status);
    if (cookieSection) {
      cookieSection.classList.add("is-hidden");
    }
  };

  if (acceptBtn) {
    acceptBtn.addEventListener("click", () => whatCookieChoice("accepted"));
  }

  if (rejectBtn) {
    rejectBtn.addEventListener("click", () => whatCookieChoice("rejected"));
  }
});
