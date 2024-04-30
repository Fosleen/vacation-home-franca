// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { landmarksData } from "../../../data/LandmarksData";
import vector from "../../../assets/images/vector-2.png";
import Landmark from "../../atoms/Landmark";
import CustomMap from "../../atoms/CustomMap";
import { FormattedMessage } from "react-intl";
import { useContext } from "react";
import { LocaleContext } from "../../../i18n/LocaleContext";
import hrData from "../../../i18n/hr.json";
import enData from "../../../i18n/en.json";
import { LazyLoadComponent } from "react-lazy-load-image-component";

const AreaInfo = () => {
  const { locale } = useContext(LocaleContext);
  const data = locale === "hr" ? hrData : enData;

  return (
    <LazyLoadComponent>
      <div className="w-full my-12 sm:px-8 relative">
        <img
          src={vector}
          alt="vector-blue-1"
          className="hidden md:block absolute left-0 translate-y-[-80px] z-20 md:w-12 2xl:w-24"
        />
        <div className="max-w-screen-xl mx-auto flex gap-4 flex-col justify-center">
          <h2 className="text-2xl font-bold text-center uppercase">
            <FormattedMessage id="area-info.title" />
          </h2>
          <CustomMap />
          <div className="flex flex-col px-8 sm:px-0 py-2 gap-8 lg:grid lg:grid-cols-2">
            {landmarksData.map((el, index) => (
              <Landmark
                landmark={el}
                key={index}
                translatedData={data.landmarks[index + 1]}
              />
            ))}
          </div>
        </div>
      </div>
    </LazyLoadComponent>
  );
};

export default AreaInfo;
