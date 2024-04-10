import { Outlet } from "react-router-dom";
import Header from "../molecules/Header";

const Layout = () => {
  return (
    <main className="min-h-screen flex flex-col bg-bg-blue ">
      <Header />
      <Outlet />
    </main>
  );
};

export default Layout;
