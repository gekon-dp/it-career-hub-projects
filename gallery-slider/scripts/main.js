const root = document.querySelector("#root");

let sliderIndex = 0;
let autoScrollInterval; // Переменная для хранения таймера

const images = [
  "https://www.vinterier.ru/pictures/shop/krasivyiy-peiyzag-kartina-maslom-40x30.jpg",
  "https://kartin.papik.pro/uploads/posts/2023-07/thumbs/1688461053_kartin-papik-pro-p-kartinki-priroda-leto-krasivie-v-khoroshem-56.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEJAzu5aTrvg0yPTkww7slPkkHuIjxHKsxRnF6YOnvsQ&s=10",
  "https://images.ctfassets.net/hrltx12pl8hq/a2hkMAaruSQ8haQZ4rBL9/8ff4a6f289b9ca3f4e6474f29793a74a/nature-image-for-website.jpg?fit=fill&w=600&h=400",
  "./assets/images/Озеро.jpg",
];

const frame = document.createElement("div");
const cards = document.createElement("div");
const triggers = document.createElement("div");
const leftBtn = document.createElement("button");
const rightBtn = document.createElement("button");

leftBtn.textContent = "<";
rightBtn.textContent = ">";

triggers.append(leftBtn, rightBtn);
frame.append(cards, triggers);
root.append(frame);

frame.classList.add("frame");
cards.classList.add("cards");
triggers.classList.add("triggers");

const container = document.createElement("div");
container.classList.add("rounds");
frame.append(container);

// Создание слайдов и круглых кнопок
images.forEach((image, index) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.style.backgroundImage = `url("${image}")`;
  cards.append(card);

  const button = document.createElement("button");
  container.append(button);

  if (index === 0) {
    button.classList.add("active");
  }

  button.addEventListener("click", () => {
    sliderIndex = index;
    updateSlider();
    resetAutoScroll(); // Сбрасываем таймер при ручном переключении
  });
});

// Функция обновления состояния слайдера
function updateSlider() {
  cards.style.left = `${-500 * sliderIndex}px`;

  // Эффективное переключение активного класса без лишнего цикла по массиву картинок
  Array.from(container.children).forEach((btn, i) => {
    btn.classList.toggle("active", i === sliderIndex);
  });
}

// Кнопка влево с бесконечной прокруткой
leftBtn.addEventListener("click", () => {
  // Если это первый слайд, перепрыгиваем на последний, иначе уменьшаем индекс
  sliderIndex = sliderIndex > 0 ? sliderIndex - 1 : images.length - 1;
  updateSlider();
  resetAutoScroll();
});

// Кнопка вправо с бесконечной прокруткой
rightBtn.addEventListener("click", () => {
  // Если это последний слайд, перепрыгиваем на первый, иначе увеличиваем индекс
  sliderIndex = sliderIndex < images.length - 1 ? sliderIndex + 1 : 0;
  updateSlider();
  resetAutoScroll();
});

// Функция запуска автоматического переключения
function startAutoScroll() {
  autoScrollInterval = setInterval(() => {
    sliderIndex = sliderIndex < images.length - 1 ? sliderIndex + 1 : 0;
    updateSlider();
  }, 5000); // Интервал 5 секунд
}

// Функция сброса таймера (чтобы слайд не переключался сразу после того, как пользователь сам нажал кнопку)
function resetAutoScroll() {
  clearInterval(autoScrollInterval);
  startAutoScroll();
}

// Инициализация автоскролла при загрузке
startAutoScroll();

// Останавливаем автопрокрутку при наведении мыши на фрейм слайдера
frame.addEventListener("mouseenter", () => {
  clearInterval(autoScrollInterval);
});

// Возобновляем автопрокрутку, когда мышь покидает фрейм
frame.addEventListener("mouseleave", () => {
  startAutoScroll();
});
