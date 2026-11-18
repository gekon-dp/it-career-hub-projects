import styles from "./styles.module.css";
import logo from "../../assets/images/cooljob-logo.png";
import linkedIn from "../../assets/icons/linkedin-social.svg";
import google from "../../assets/icons/google-social.svg";
import twitter from "../../assets/icons/twitter-social.svg";
import facebook from "../../assets/icons/facebook-social.svg";

function Footer() {
  return (
    <footer>
      <h2>Популярные города</h2>
      <ul className={styles.cities}>
        <li>Осака</li>
        <li>Коясан</li>
        <li>Токио</li>
        <li>Ханоэ</li>
        <li>Наэба</li>
        <li>Томаму</li>
        <li>Йокогама</li>
        <li>Нагоя</li>
        <li>Саппоро</li>
        <li>Кобе</li>
      </ul>
      <div className={styles.bottom}>
        <img src={logo} alt="logo" />
        <ul className={styles.links}>
          <li>
            <a href="#">
              <img src={linkedIn} alt="facebook" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={google} alt="instagram" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={twitter} alt="twitter" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={facebook} alt="twitter" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
