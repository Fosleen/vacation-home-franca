import { Dispatch, FC, SetStateAction, useContext } from "react";
import { Link } from "react-router-dom";
import flagCro from "../../../assets/icons/croatia.png";
import flagUk from "../../../assets/icons/united-kingdom.png";
import { FormattedMessage } from "react-intl";
import { LocaleContext } from "../../../i18n/LocaleContext";

const Navbar: FC<{ setNavOpen: Dispatch<SetStateAction<boolean>> }> = ({
  setNavOpen,
}) => {
  const { locale, setLocale } = useContext(LocaleContext);

  return (
    <div className="flex gap-6 flex-col py-4 items-center md:flex-row">
      <Link
        to="/"
        className="text-2xl text-center text-dark-blue md:text-base"
        onClick={() => {
          setNavOpen(false);
        }}
      >
        <FormattedMessage id="navbar.homepage" />
      </Link>
      <hr className="border-dark-blue w-72 md:hidden" />
      <Link
        to="/o-nama"
        className="text-2xl text-center text-dark-blue md:text-base"
        onClick={() => {
          setNavOpen(false);
        }}
      >
        <FormattedMessage id="navbar.about" />
      </Link>
      <hr className="border-dark-blue w-72 md:hidden" />
      <Link
        to="/kontakt"
        className="text-2xl text-center text-dark-blue md:text-base"
        onClick={() => {
          setNavOpen(false);
        }}
      >
        <FormattedMessage id="navbar.contact" />
      </Link>
      {locale != "hr" && (
        <img
          src={flagCro}
          alt="flag-croatia"
          className="max-h-10 cursor-pointer"
          onClick={() => setLocale("hr")}
        />
      )}
      {locale != "en" && (
        <img
          src={flagUk}
          alt="flag-uk"
          className="max-h-10 cursor-pointer"
          onClick={() => setLocale("en")}
        />
      )}
    </div>
  );
};

export default Navbar;
