import { Link } from "react-router-dom";

const Navbar = ({ setNavOpen }) => {
  return (
    <div className="flex gap-6 flex-col py-4 md:flex-row">
      <Link
        to="/"
        className="text-2xl text-center md:text-sm"
        onClick={() => {
          setNavOpen(false);
        }}
      >
        POČETNA
      </Link>
      <hr className="bg-dark-blue w-72 md:hidden" />
      <Link
        to="/o-nama"
        className="text-2xl text-center md:text-sm"
        onClick={() => {
          setNavOpen(false);
        }}
      >
        O NAMA
      </Link>
      <hr className="bg-dark-blue w-72 md:hidden" />
      <Link
        to="/kontakt"
        className="text-2xl text-center md:text-sm "
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
