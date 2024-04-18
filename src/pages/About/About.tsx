import Gallery from "../../components/atoms/Gallery";
import AboutInfo from "../../components/molecules/AboutInfo";

const About = () => {
  return (
    <div className="w-full mt-8 px-8">
      <div className="max-w-screen-xl mx-auto flex-col flex gap-8">
        <AboutInfo />
        <Gallery />
      </div>
    </div>
  );
};

export default About;
