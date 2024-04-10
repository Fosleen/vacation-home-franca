import { Link } from "react-router-dom";
import logo from "../../../assets/franca-logo.png";
import LocationAndPhone from "../../atoms/LocationAndPhone";
import Navbar from "../../atoms/Navbar";
import { List, X } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

const Header = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  const [isDesktop, setDesktop] = useState(window.innerWidth > 768);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <div className="w-full flex flex-col items-center max-w-screen-xl mx-auto py-2 md:flex-row md:justify-between md:px-4">
      <div className="flex gap-8 w-full justify-between items-center px-4 md:w-fit ">
        <Link to="/">
          <img src={logo} alt="franca-logo" className="w-32 md:w-40" />
        </Link>
        <div className="hidden md:flex">
          <LocationAndPhone />
        </div>
        <div className="flex md:hidden">
          {isNavOpen ? (
            <X
              color="#3F4344"
              size={48}
              onClick={() => setNavOpen(!isNavOpen)}
            />
          ) : (
            <List
              color="#3F4344"
              size={48}
              onClick={() => setNavOpen(!isNavOpen)}
            />
          )}
        </div>
      </div>
      {(isNavOpen || isDesktop) && <Navbar setNavOpen={setNavOpen} />}
    </div>
  );
};

export default Header;
