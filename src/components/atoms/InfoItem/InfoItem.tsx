import { FormattedMessage } from "react-intl";
import iconInfo from "../../../assets/icons/info-fa-icon.png";

const InfoItem = () => {
  return (
    <div className="flex flex-row gap-4 items-center lg:gap-8">
      <img src={iconInfo} alt="info-icon" className="w-8 h-8 md:w-12 md:h-12" />
      <div className="flex flex-col gap-4 md:gap-0">
        <p>
          <FormattedMessage id="about.info.1" />
        </p>
        <p>
          <FormattedMessage id="about.info.2" />
        </p>
        <p>
          <FormattedMessage id="about.info.3" />
        </p>
      </div>
    </div>
  );
};

export default InfoItem;
