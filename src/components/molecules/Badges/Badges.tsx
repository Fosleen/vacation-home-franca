// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { badgesData } from "../../../data/BadgesData";
import Badge from "../../atoms/Badge";
import hrData from "../../../i18n/hr.json";
import enData from "../../../i18n/en.json";
import { useContext } from "react";
import { LocaleContext } from "../../../i18n/LocaleContext";
import { LazyLoadComponent } from "react-lazy-load-image-component";

const Badges = () => {
  const { locale } = useContext(LocaleContext);
  const data = locale === "hr" ? hrData : enData;

  return (
    <div className="w-full px-8 flex justify-center">
      <LazyLoadComponent>
        <div className="max-w-screen-xl mx-auto inline-grid gap-6 grid-cols-2 grid-rows-3 mt-12 xs:grid-cols-3 xs:grid-rows-2 lg:grid-rows-1 lg:grid-cols-6 lg:gap-8">
          {badgesData.map((badge, index) => (
            <Badge
              badge={badge}
              key={index}
              translatedData={data.badges[index + 1]}
            />
          ))}
        </div>
      </LazyLoadComponent>
    </div>
  );
};

export default Badges;
