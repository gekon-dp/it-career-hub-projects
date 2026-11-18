import CategoryCard from "../categoryCard";
import styles from "./styles.module.css";
import moreCat from "../../assets/icons/more-cat.png";
import cat1 from "../../assets/icons/cat1.png";
import cat2 from "../../assets/icons/cat2.png";
import cat3 from "../../assets/icons/cat3.png";
import cat4 from "../../assets/icons/cat4.png";
import cat5 from "../../assets/icons/cat5.png";
import cat6 from "../../assets/icons/cat6.png";
import cat7 from "../../assets/icons/cat7.png";
import cat8 from "../../assets/icons/cat8.png";
import cat9 from "../../assets/icons/cat9.png";

const categories = [
  { id: "finance", title: "Финансы", image: cat1 },
  { id: "logistic", title: "Грузоперевозки", image: cat2 },
  { id: "design", title: "Дизайн", image: cat3 },
  { id: "restaurant", title: "Ресторанный бизнес", image: cat4 },
  { id: "medicine", title: "Медицина", image: cat5 },
  { id: "media", title: "Мультимедиа", image: cat6 },
  { id: "support", title: "Служба поддержки", image: cat7 },
  { id: "managment", title: "Менеджмент", image: cat8 },
  { id: "sales", title: "Продажи", image: cat9 },
];

function CategoryCardList() {
  return (
    <section className={styles.categoryCardList}>
      <h2>
        Работа <br />
        по категориям
      </h2>
      <ul className={styles.list}>
        {categories.map((category) => (
          <li key={category.id}>
            <CategoryCard title={category.title} image={category.image} />
          </li>
        ))}
        <li className={styles.moreCard}>
          <img src={moreCat} alt="" />
          <p>
            Больше
            <br />
            категорий
          </p>
        </li>
      </ul>
    </section>
  );
}

export default CategoryCardList;
