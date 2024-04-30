import { useNavigate } from "react-router-dom";
import Button from "../../atoms/Button";
import Carousel from "../../atoms/Carousel";
import Aos from "aos";
import { useEffect } from "react";
import { FormattedMessage } from "react-intl";
import { LazyLoadComponent } from "react-lazy-load-image-component";

const CarouselInfo = () => {
  const navigate = useNavigate();
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="bg-gradient-to-r from-dark-blue via-gray-800 to-gray-950 w-full bg-cover md:mt-10">
      <LazyLoadComponent>
        <div className="py-4 w-full lg:mt-8 md:px-8 lg:pt-12">
          <div className="max-w-screen-xl mx-auto flex flex-col-reverse lg:flex-row w-full lg:gap-8">
            <div className="px-8 md:p-0 md:py-8 lg:w-1/2">
              <Carousel />
            </div>
            <div className="flex flex-col justify-center items-center md:items-start gap-6 p-8 pb-12 md:pb-0 pt-12 md:px-0 lg:py-8 lg:mb-24">
              <h2 className="text-2xl font-semibold text-center text-light-blue">
                <FormattedMessage id="house-info.title" />
              </h2>
              <div className="flex flex-col gap-4">
                <p className="text-justify text-light-blue">
                  <FormattedMessage id="house-info.text.1" />
                </p>
                <p className="text-justify text-light-blue">
                  <FormattedMessage id="house-info.text.2" />
                </p>
              </div>
              <div
                className="flex
              w-full gap-4 justify-center md:justify-start"
              >
                <Button onClick={() => navigate("/o-nama")}>
                  <FormattedMessage id="btn.photo-gallery" />
                </Button>
                <Button onClick={() => navigate("/kontakt")}>
                  <FormattedMessage id="btn.reserve" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </LazyLoadComponent>
    </div>
  );
};

export default CarouselInfo;
