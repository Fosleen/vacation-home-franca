import { Link } from "react-router-dom";
import iconLocation from "../../../assets/location-icon.png";
import iconPhone from "../../../assets/phone-icon.png";

const LocationAndPhone = () => {
  return (
    <Link to="/kontakt" className="flex flex-col justify-center ">
      <span className="flex gap-1">
        <img src={iconLocation} alt="location-icon" />
        <p className="text-xs flex items-center">
          Trešćerovac 14, 47280 Ozalj, Croatia
        </p>
      </span>
      <span className="flex gap-1">
        <img src={iconPhone} alt="phone-icon" />
        <p className="text-xs flex items-center">+385 97 655 0981</p>
      </span>
    </Link>
  );
};

export default LocationAndPhone;
