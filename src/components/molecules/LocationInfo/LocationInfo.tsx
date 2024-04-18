import { useNavigate } from "react-router-dom";
import Button from "../../atoms/Button";
import Map from "../../atoms/Map";
import { useEffect } from "react";
import Aos from "aos";

const LocationInfo = () => {
  const navigate = useNavigate();
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="w-full mt-8 md:px-8">
      <div className="max-w-screen-xl mx-auto flex items-center flex-col gap-6 lg:flex-row">
        <div
          className="flex flex-col gap-6 px-8 md:px-0 items-center"
          data-aos="fade-right"
          data-aos-anchor-placement="center-bottom"
        >
          <h2 className="text-2xl font-semibold text-center">RIJEČNA TIŠINA</h2>
          <div className="flex flex-col gap-2">
            <p className="text-justify">
              Cras massa ex, accumsan in ornare ut, sagittis sed dui. Mauris
              sagittis sed eros in faucibus. Aliquam augue ipsum.
            </p>
            <p className="text-justify">
              Nullam ullamcorper suscipit posuere. Fusce in scelerisque erat.
              Nunc quis metus nunc. Morbi vitae pretium lacus, eget congue
              purus. Quisque sed bibendum eros, vitae pharetra quam. Ut eget
              iaculis orci, et semper nunc.
            </p>
          </div>
          <Button onClick={() => navigate("/o-nama")}>saznaj više</Button>
        </div>
        <div className="w-full mt-4 lg:mt-0">
          <Map />
        </div>
      </div>
    </div>
  );
};

export default LocationInfo;
