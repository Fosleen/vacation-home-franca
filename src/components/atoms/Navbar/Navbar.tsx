import { Dispatch, FC, SetStateAction } from "react";
import { Link } from "react-router-dom";

const Navbar: FC<{ setNavOpen: Dispatch<SetStateAction<boolean>> }> = ({
  setNavOpen,
}) => {
  return (
    <div className="flex gap-6 flex-col py-4 md:flex-row">
      <Link
        to="/"
        className="text-2xl text-center text-dark-blue md:text-base"
        onClick={() => {
          setNavOpen(false);
        }}
      >
        POČETNA
      </Link>
      <hr className="border-dark-blue w-72 md:hidden" />
      <Link
        to="/o-nama"
        className="text-2xl text-center text-dark-blue md:text-base"
        onClick={() => {
          setNavOpen(false);
        }}
      >
        O NAMA
      </Link>
      <hr className="border-dark-blue w-72 md:hidden" />
      <Link
        to="/kontakt"
        className="text-2xl text-center text-dark-blue md:text-base"
        onClick={() => {
          setNavOpen(false);
        }}
      >
        KONTAKT
      </Link>
    </div>
  );
};

export default Navbar;
