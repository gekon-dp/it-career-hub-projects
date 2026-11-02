const root = document.querySelector("#root");

let sliderIndex = 0;
let autoScrollInterval; // Переменная для хранения таймера

// Чтобы код работал, массив images не должен быть пустым (добавлены тестовые ссылки)
const images = [
  "https://www.vinterier.ru/pictures/shop/krasivyiy-peiyzag-kartina-maslom-40x30.jpg",
  "https://kartin.papik.pro/uploads/posts/2023-07/thumbs/1688461053_kartin-papik-pro-p-kartinki-priroda-leto-krasivie-v-khoroshem-56.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEJAzu5aTrvg0yPTkww7slPkkHuIjxHKsxRnF6YOnvsQ&s=10",
  "https://images.ctfassets.net/hrltx12pl8hq/a2hkMAaruSQ8haQZ4rBL9/8ff4a6f289b9ca3f4e6474f29793a74a/nature-image-for-website.jpg?fit=fill&w=600&h=400",
  "./assets/images/Озеро.jpg",
];

const frame = document.createElement("div");
const viewport = document.createElement("div");
const cards = document.createElement("div");
const triggers = document.createElement("div");
const leftBtn = document.createElement("button");
const rightBtn = document.createElement("button");

leftBtn.textContent = "<";
rightBtn.textContent = ">";

// Собираем разметку правильно
triggers.append(leftBtn, rightBtn);
viewport.append(cards, triggers);

const container = document.createElement("div");
container.classList.add("previews");

frame.append(viewport, container);
root.append(frame);

frame.classList.add("frame");
viewport.classList.add("slider-viewport");
cards.classList.add("cards");
triggers.classList.add("triggers");

// Создание слайдов и превью-кнопок
images.forEach((image, index) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.style.backgroundImage = `url("${image}")`;
  cards.append(card);

  const previewBtn = document.createElement("div");
  previewBtn.classList.add("preview-btn");

  const previewImg = document.createElement("img");
  previewImg.src = image;
  previewImg.alt = `Превью ${index + 1}`;

  previewBtn.append(previewImg);
  container.append(previewBtn);

  if (index === 0) {
    previewBtn.classList.add("active");
  }

  previewBtn.addEventListener("click", () => {
    sliderIndex = index;
    updateSlider();
    resetAutoScroll();
  });
});

// Функция обновления состояния слайдера
function updateSlider() {
  // Двигаем общую ленту с карточками (.cards) влево
  cards.style.left = `${-500 * sliderIndex}px`;

  // Переключаем активный класс у превьюшек
  Array.from(container.children).forEach((btn, i) => {
    btn.classList.toggle("active", i === sliderIndex);
  });
}

// Кнопка влево с бесконечной прокруткой
leftBtn.addEventListener("click", () => {
  sliderIndex = sliderIndex > 0 ? sliderIndex - 1 : images.length - 1;
  updateSlider();
  resetAutoScroll();
});

// Кнопка вправо с бесконечной прокруткой
rightBtn.addEventListener("click", () => {
  sliderIndex = sliderIndex < images.length - 1 ? sliderIndex + 1 : 0;
  updateSlider();
  resetAutoScroll();
});

// Функция запуска автоматического переключения
function startAutoScroll() {
  clearInterval(autoScrollInterval);
  autoScrollInterval = setInterval(() => {
    sliderIndex = sliderIndex < images.length - 1 ? sliderIndex + 1 : 0;
    updateSlider();
  }, 5000);
}

// Функция сброса таймера
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
