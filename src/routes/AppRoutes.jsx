import { Routes, Route } from "react-router-dom";

import Footer from "../component/footer/footer";
import Home from "../pages/home/home";
import Branding from "../pages/branding/branding";
import UiUx from "../pages/uiux/uiux";
import Crosia from "../pages/branding/crosia/crosia";
import GMP from "../pages/branding/gmp/gmp";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/branding" element={<Branding />} />
        <Route path="/uiux" element={<UiUx />} />
        <Route path="branding/crosia" element={<Crosia />} />
        <Route path="branding/gmp" element={<GMP />} />
      </Routes>

      <Footer />
    </>
  );
};

export default AppRoutes;
