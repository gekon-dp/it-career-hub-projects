import Header from "../../components/header";
import Hero from "../../components/hero";
import Info from "../../components/info";
import CategoryCardList from "../../components/categoryCardList";
import VacancyCardList from "../../components/vacancyCardList";
import Footer from "../../components/footer";

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Info />
      <CategoryCardList />
      <VacancyCardList />
      <Footer />
    </div>
  );
}

export default Home;
