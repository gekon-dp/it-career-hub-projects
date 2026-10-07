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

// один контейнер для всех радиокнопок
const container = document.createElement("div");
container.classList.add("rounds");
frame.append(container);

// один forEach для всего
images.forEach((image, index) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.style.backgroundImage = `url("${image}")`;
  cards.append(card);

  const button = document.createElement("button");
  container.append(button);

  //   первая радиокнопка с классом active
  if (index === 0) {
    button.classList.add("active");
  }
  // событие нажатия на кнопки
  button.addEventListener("click", () => {
    sliderIndex = index;
    cards.style.left = `${-500 * sliderIndex}px`;

    images.forEach((image, i) => {
      container.children[i].classList.remove("active");
    });

    button.classList.add("active");
  });
});

// кнопка влево
leftBtn.addEventListener("click", () => {
  if (sliderIndex > 0) {
    sliderIndex--;
    container.children[sliderIndex].click();
  }
});

// кнопка вправо
rightBtn.addEventListener("click", () => {
  if (sliderIndex < images.length - 1) {
    sliderIndex++;
    container.children[sliderIndex].click();
  }
});

// function createRounds() {
//   const container = document.createElement("div");
//   container.classList.add("rounds");
//   frame.append(container);

//   for (let i = 0; i < images.length; i++) {
//     const button = document.createElement("button");
//     container.append(button);

//     button.addEventListener("click", () => {
//       sliderIndex = i;
//       cards.style.left = `${-500 * sliderIndex}px`;
//       const allButtons = button.parentElement.children;

//       for (let j = 0; j < allButtons.length; j++) {
//         allButtons[j].classList.remove("active");
//       }
//       button.classList.add("active");
//     });
//   }
// }
// createRounds();
