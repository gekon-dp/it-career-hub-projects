import styles from "./styles.module.css";
import searchIcon from "../../assets/icons/search-icon.png";
import locationIcon from "../../assets/icons/location-icon.png";

function Form() {
  return (
    <form className={styles.form}>
      <div className={styles.formInput}>
        <img src={searchIcon} alt="search icon" />
        <input type="search" placeholder="Должность или компания" />
      </div>
      <div className={styles.formInput}>
        <img src={locationIcon} alt="location icon" />
        <input type="text" placeholder="Город, Страна" />
      </div>
      <div className={styles.formButton}>
        <button className={styles.searchButton} type="submit">
          Поиск
        </button>
      </div>
    </form>
  );
}

export default Form;
