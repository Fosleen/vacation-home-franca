import { Link } from "react-router-dom";
import iconLocation from "../../../assets/icons/location-icon.png";
import iconPhone from "../../../assets/icons/phone-icon.png";
import { FormattedMessage } from "react-intl";

const LocationAndPhone = () => {
  return (
    <Link to="/kontakt" className="flex flex-col justify-center ">
      <span className="flex gap-1">
        <img src={iconLocation} alt="location-icon" />
        <p className="text-xs flex items-center text-dark-blue">
          Trešćerovac 14, 47280 Ozalj, <FormattedMessage id="croatia" />
        </p>
      </span>
      <span className="flex gap-1">
        <img src={iconPhone} alt="phone-icon" />
        <p className="text-xs flex items-center text-dark-blue">
          +385 97 655 0981
        </p>
      </span>
    </Link>
  );
};

export default LocationAndPhone;
