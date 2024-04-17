import Hero from "../../components/atoms/Hero";
import HomepageInfo from "../../components/molecules/HomepageInfo";
import Badges from "../../components/molecules/Badges";
import CarouselInfo from "../../components/molecules/CarouselInfo";

const Homepage = () => {
  return (
    <>
      <Hero />
      <Badges />
      <HomepageInfo />
      <CarouselInfo />
    </>
  );
};

export default Homepage;
