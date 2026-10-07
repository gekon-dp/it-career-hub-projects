const root = document.querySelector("#root");

let sliderIndex = 0;

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

images.forEach((image) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.style.backgroundImage = `url("${image}")`;
  cards.append(card);
});

leftBtn.addEventListener("click", () => {
  if (sliderIndex > 0) {
    sliderIndex--;
    cards.style.left = `${-500 * sliderIndex}px`;
  }
});

rightBtn.addEventListener("click", () => {
  if (sliderIndex < images.length - 1) {
    sliderIndex++;
    cards.style.left = `${-500 * sliderIndex}px`;
  }
});
