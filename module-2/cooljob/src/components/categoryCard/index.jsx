import styles from "./styles.module.css";

function CategoryCard({ title, image }) {
  return (
    <div className={styles.categoryCard}>
      <img src={image} alt={title} />
      <p>{title}</p>
    </div>
  );
}

export default CategoryCard;
