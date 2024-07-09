import Hero from "../../components/atoms/Hero";
import HomepageInfo from "../../components/molecules/HomepageInfo";
import Badges from "../../components/molecules/Badges";
import CarouselInfo from "../../components/molecules/CarouselInfo";
import AreaInfo from "../../components/molecules/AreaInfo";
import LocationInfo from "../../components/molecules/LocationInfo";
import Video from "../../components/atoms/Video/Video";
import Reviews from "../../components/molecules/Reviews";

const Homepage = () => {
  return (
    <>
      <Hero />
      <Badges />
      <HomepageInfo />
      <LocationInfo />
      <CarouselInfo />
      <Video
        url={
          "https://www.youtube-nocookie.com/embed/WplvZvoSTNY?si=BwUiTzdxJoJGJ0Nt"
        }
      />
      <Video
        url={
          "https://www.youtube-nocookie.com/embed/EqxqDAMwhSs?si=yA_cW6LZF1_37L2Q"
        }
      />

      <Reviews />
      <AreaInfo />
    </>
  );
};

export default Homepage;
