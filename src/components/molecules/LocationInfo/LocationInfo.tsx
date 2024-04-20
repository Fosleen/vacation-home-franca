import { useNavigate } from "react-router-dom";
import Button from "../../atoms/Button";
import Map from "../../atoms/Map";
import { useEffect } from "react";
import Aos from "aos";
import { FormattedMessage } from "react-intl";

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
          <h2 className="text-2xl font-semibold text-center uppercase">
            <FormattedMessage id="location-info.title" />
          </h2>
          <div className="flex flex-col gap-2">
            <p className="text-justify">
              <FormattedMessage id="location-info.text.1" />
            </p>
            <p className="text-justify">
              <FormattedMessage id="location-info.text.2" />
            </p>
          </div>
          <Button onClick={() => navigate("/o-nama")}>
            <FormattedMessage id="btn.find-out-more" />
          </Button>
        </div>
        <div className="w-full mt-4 lg:mt-0">
          <Map />
        </div>
      </div>
    </div>
  );
};

export default LocationInfo;
