import VacancyCard from "../vacancyCard";
import styles from "./styles.module.css";
import sony from "../../assets/images/sonyColor.png";
import facebook from "../../assets/images/facebookColor.png";
import cola from "../../assets/images/сolaColor.png";
import locationIcon from "../../assets/icons/location-icon.png";

const vacancies = [
  {
    id: "1",
    categoryTitle: "Финансы",
    categoryColor: "#5182ff",
    title: "Менеджер по управлению финансами в крупной компании",
    locationIcon: locationIcon,
    location: "Осака, Япония",
    companyLogo: sony,
    postedAt: "3 дня назад",
  },
  {
    id: "2",
    categoryTitle: "Продажи",
    categoryColor: "#ff51ee",
    title: "Специалист по продажам",
    locationIcon: locationIcon,
    location: "Коясан, Япония",
    companyLogo: facebook,
    postedAt: "7 дней назад",
  },
  {
    id: "3",
    categoryTitle: "Служба поддержки",
    categoryColor: "#58d94d",
    title: "Оператор колл центра",
    locationIcon: locationIcon,
    location: "Томаму, Япония",
    companyLogo: cola,
    postedAt: "1 день назад",
  },
  {
    id: "4",
    categoryTitle: "Мультимедиа",
    categoryColor: "#ff9051",
    title: "Системный администратор",
    locationIcon: locationIcon,
    location: "Токио, Япония",
    companyLogo: sony,
    postedAt: "3 дня назад",
  },
  {
    id: "5",
    categoryTitle: "Дизайн",
    categoryColor: "#f84242",
    title: "Дизайнер интерьера в профессиональную студию в центре города",
    locationIcon: locationIcon,
    location: "Йокогама, Япония",
    companyLogo: facebook,
    postedAt: "7 дней назад",
  },
  {
    id: "6",
    categoryTitle: "Грузоперевозки",
    categoryColor: "#383838",
    title: "Водитель на дальние дистанции",
    locationIcon: locationIcon,
    location: "Кобе. Япония",
    companyLogo: cola,
    postedAt: "1 день назад",
  },
];

function VacancyCardList() {
  return (
    <section className={styles.vacancyCardList}>
      <h2>Новые вакансии</h2>
      <p className={styles.description}>
        Найди работу своей мечты прямо сейчас
      </p>
      <ul className={styles.list}>
        {vacancies.map((vacancy) => (
          <li key={vacancy.id}>
            <VacancyCard
              categoryColor={vacancy.categoryColor}
              categoryTitle={vacancy.categoryTitle}
              vacancyTitle={vacancy.title}
              locationIcon={locationIcon}
              location={vacancy.location}
              companyLogo={vacancy.companyLogo}
              postedAt={vacancy.postedAt}
            />
          </li>
        ))}
      </ul>
      <button className={styles.button} type="button">
        Все вакансии
      </button>
    </section>
  );
}

export default VacancyCardList;
