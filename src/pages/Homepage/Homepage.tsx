import Hero from "../../components/atoms/Hero";
import HomepageInfo from "../../components/molecules/HomepageInfo";
import Badges from "../../components/molecules/Badges";
import CarouselInfo from "../../components/molecules/CarouselInfo";
import AreaInfo from "../../components/molecules/AreaInfo";
import LocationInfo from "../../components/molecules/LocationInfo";
import Video from "../../components/atoms/Video/Video";

const Homepage = () => {
  return (
    <>
      <Hero />
      <Badges />
      <HomepageInfo />
      <LocationInfo />
      <CarouselInfo />
      <Video />
      <AreaInfo />
    </>
  );
};

export default Homepage;
