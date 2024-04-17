import Hero from "../../components/atoms/Hero";
import HomepageInfo from "../../components/molecules/HomepageInfo";
import Badges from "../../components/molecules/Badges";
import CarouselInfo from "../../components/molecules/CarouselInfo";
import AreaInfo from "../../components/molecules/AreaInfo";

const Homepage = () => {
  return (
    <>
      <Hero />
      <Badges />
      <HomepageInfo />
      <CarouselInfo />
      <AreaInfo />
    </>
  );
};

export default Homepage;
