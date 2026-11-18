import styles from "./styles.module.css";

function VacancyCard({
  categoryColor,
  categoryTitle,
  locationIcon,
  vacancyTitle,
  location,
  companyLogo,
  postedAt,
}) {
  return (
    <div className={styles.card}>
      <div className={styles.category}>
        <span
          className={styles.dot}
          style={{ backgroundColor: categoryColor }}
        />
        <span>{categoryTitle}</span>
      </div>
      <h3>{vacancyTitle}</h3>
      <div className={styles.location}>
        <img src={locationIcon} alt="location icon" />
        <p>{location}</p>
      </div>
      <div className={styles.footer}>
        <img src={companyLogo} alt="company logo" />
        <span>{postedAt}</span>
      </div>
    </div>
  );
}

export default VacancyCard;
