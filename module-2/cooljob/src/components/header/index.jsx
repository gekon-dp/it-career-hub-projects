import cooljobLogo from "../../assets/images/cooljob-logo.png";
import styles from "./styles.module.css";

function Header() {
  return (
    <header>
      <div className={styles.headerContainer}>
        <div className={styles.leftColumn}>
          <img src={cooljobLogo} alt="cooljob" />
        </div>
        <div className={styles.middleColumn}>
          <ul>
            <li>Поиск работы</li>
            <li>Поиск стартапов</li>
          </ul>
        </div>
        <div className={styles.rightColumn}>
          <button className={styles.registrationButton}>Регистрация</button>
          <button className={styles.loginButton}>Вход</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
