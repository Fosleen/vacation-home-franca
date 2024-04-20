import { Outlet } from "react-router-dom";
import Header from "../molecules/Header";
import Footer from "../molecules/Footer";
import ScrollToTop from "../atoms/ScrollToTop";

const Layout = () => {
  return (
    <main className="min-h-screen flex flex-col bg-bg-blue">
      <ScrollToTop />
      <Header />
      <span className="flex-1">
        <Outlet />
      </span>
      <Footer />
    </main>
  );
};

export default Layout;
