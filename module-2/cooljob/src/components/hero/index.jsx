import styles from "./styles.module.css";
import Form from "../form";
import backgroundElement from "../../assets/images/hero-rectangle.svg";

function Hero() {
  return (
    <section className={styles.hero}>
      <h1>
        Один клик
        <br />и работа в кармане
      </h1>
      <Form />
      <img
        className={styles.backgroundElement}
        src={backgroundElement}
        alt="background element"
      />
    </section>
  );
}

export default Hero;
