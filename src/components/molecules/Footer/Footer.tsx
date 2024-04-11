import { footerData } from "../../../data/FooterData";
import FooterItem from "../../atoms/FooterItem";
import fosleenLogo from "../../../assets/images/logo-light.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-dark-blue px-8 pb-16">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col gap-10 py-12 md:flex-row md:justify-between">
          {footerData.map((item, index) => (
            <FooterItem item={item} key={index} />
          ))}
        </div>
        <span className="flex flex-col gap-10">
          <hr className="w-full border-main-blue" />
          <span className="w-full flex justify-end">
            <Link to="https://fosleen.netlify.app/" target="_blank">
              <img src={fosleenLogo} alt="fosleen-logo" className="w-40" />
            </Link>
          </span>
        </span>
      </div>
    </div>
  );
};

export default Footer;
