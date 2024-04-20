// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { useContext, useEffect } from "react";
import { aboutBadgesData } from "../../../data/AboutBadgesData";
import InfoItem from "../../atoms/InfoItem";
import Aos from "aos";
import { FormattedMessage } from "react-intl";
import { LocaleContext } from "../../../i18n/LocaleContext";
import hrData from "../../../i18n/hr.json";
import enData from "../../../i18n/en.json";

const AboutInfo = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  const { locale } = useContext(LocaleContext);
  const data = locale === "hr" ? hrData : enData;

  return (
    <>
      <div>
        <h2 className="text-2xl font-semibold text-grey-blue uppercase mb-4 text-center md:text-left">
          <FormattedMessage id="about.title" />
        </h2>
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="flex flex-col gap-4 flex-1">
            <p className="text-justify">
              <FormattedMessage id="about.text.1" />
            </p>
            <p className="text-justify">
              <FormattedMessage id="about.text.2" />
            </p>
            <p className="text-justify">
              <FormattedMessage id="about.text.3" />
            </p>
          </div>
          <div
            className="flex flex-col gap-5 flex-1 bg-light-blue w-full p-4 md:p-8 justify-center h-fit"
            data-aos="flip-right"
          >
            {aboutBadgesData.map((el, index) => (
              <div key={index} className="flex gap-4 items-center">
                <img
                  src={el.icon}
                  alt={el.text}
                  className="w-8 h-8 md:w-10 md:h-10"
                />
                <p>{data.about.badge.text[index + 1]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="my-8">
        <InfoItem />
      </div>
    </>
  );
};

export default AboutInfo;
