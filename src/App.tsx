import { Route, Routes } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "aos/dist/aos.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="/o-nama" element={<About />} />
        <Route path="kontakt" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
