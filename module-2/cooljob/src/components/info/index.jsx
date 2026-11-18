import styles from "./styles.module.css";
import disney from "../../assets/images/disney.svg";
import facebook from "../../assets/images/facebook.svg";
import microsoft from "../../assets/images/microsoft.svg";
import sony from "../../assets/images/sony.svg";
import cocaCola from "../../assets/images/cocacola.svg";

function Info() {
  return (
    <section className={styles.info}>
      <p2>Помогаем найти работу:</p2>
      <ul>
        <li>
          <img src={disney} alt="disney" />
        </li>
        <li>
          <img src={facebook} alt="facebook" />
        </li>
        <li>
          <img src={microsoft} alt="microsoft" />
        </li>
        <li>
          <img src={sony} alt="sony" />
        </li>
        <li>
          <img src={cocaCola} alt="coca-cola" />
        </li>
      </ul>
    </section>
  );
}

export default Info;
