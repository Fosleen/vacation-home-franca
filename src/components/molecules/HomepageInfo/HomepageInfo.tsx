import { useNavigate } from "react-router-dom";
import photo from "../../../assets/images/DJI_0056.jpg";
import vector from "../../../assets/images/vector-1.png";
import Button from "../../atoms/Button";
import Aos from "aos";
import { useEffect } from "react";
import { FormattedMessage } from "react-intl";
import { LazyLoadComponent } from "react-lazy-load-image-component";

const HomepageInfo = () => {
  const navigate = useNavigate();
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="w-full mt-12 md:px-8 relative">
      <LazyLoadComponent>
        <img
          src={vector}
          alt="vector-blue-1"
          className="hidden md:block absolute right-0 translate-y-[-208px] z-20"
        />
        <div
          className="max-w-screen-xl mx-auto flex flex-col lg:flex-row-reverse"
          data-aos="fade-right"
        >
          <div className="lg:py-8 z-10 w-full">
            <div className="bg-light-blue flex flex-col justify-center items-center md:items-start gap-6 p-8 pb-16 lg:p-8 lg:translate-x-[-64px] lg:mr-[-64px]">
              <h2 className="text-2xl font-semibold text-center mt-2">
                <FormattedMessage id="homepage-info.title" />
              </h2>
              <div className="flex flex-col gap-2">
                <p className="text-justify">
                  <FormattedMessage id="homepage-info.text.1" />
                </p>
                <hr className="w-full border-main-blue" />
                <p className="text-justify">
                  <FormattedMessage id="homepage-info.text.2" />
                </p>
              </div>
              <Button onClick={() => navigate("/o-nama")}>
                <FormattedMessage id="btn.find-out-more" />
              </Button>
            </div>
          </div>
          <div className="px-8 translate-y-[-32px] lg:translate-y-0 lg:max-w-2xl lg:p-0 z-20 lg:z-0">
            <img
              src={photo}
              alt="franca-house-photo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </LazyLoadComponent>
    </div>
  );
};

export default HomepageInfo;
