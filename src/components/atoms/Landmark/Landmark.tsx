import { FC, useEffect } from "react";
import { LandmarkProps, TranslatedDataProps } from "../../../common/types";
import { Link } from "react-router-dom";
import Aos from "aos";

const Landmark: FC<{
  landmark: LandmarkProps;
  translatedData: TranslatedDataProps;
}> = ({ landmark, translatedData }) => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <Link
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      to={landmark.url}
      target="_blank"
      className="flex flex-col-reverse gap-4 sm:flex-row items-center"
    >
      <div className="relative w-full z-10 sm:w-72 sm:h-72 lg:w-60 lg:h-60">
        <p className="absolute bottom-2 right-2 text-xs sm:bottom-6 sm:pr-8">
          * slika je preuzeta
        </p>
        <img
          src={landmark.img}
          alt={landmark.img}
          className="max-h-48 w-full object-cover h-full sm:py-4 sm:pr-8 sm:max-h-none"
        />
      </div>
      <div className="flex gap-2 flex-col flex-1 justify-center items-start sm:p-8 sm:translate-x-[-156px] sm:mr-[-156px] sm:bg-light-blue lg:h-64">
        <h2 className="text-2xl font-semibold uppercase sm:pl-24">
          {translatedData.title}
        </h2>
        <p className="text-justify sm:pl-24 sm:text-left md:text-xl lg:text-base">
          {translatedData.description}
        </p>
      </div>
    </Link>
  );
};

export default Landmark;
