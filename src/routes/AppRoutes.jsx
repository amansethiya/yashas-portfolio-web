import { Routes, Route } from "react-router-dom";
import React from "react";
import Footer from "../component/footer/footer";
import Home from "../pages/home/home";
import About from "../pages/about/about";
import Branding from "../pages/branding/branding";
import UiUx from "../pages/uiux/uiux";
import CaseStudies from "../pages/cases/cases";
import Crosia from "../pages/branding/crosia/crosia";
import GMP from "../pages/branding/gmp/gmp";
import VacationV from "../pages/branding/vacationv/vacationv";
import Scrolltotop from "../component/scrolltotop";
import Studio from "../pages/studio/studio";

const AppRoutes = () => {
  return (
    <div>
      <Scrolltotop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/studio" element={<Studio />} />
        <Route path="/branding" element={<Branding />} />
        <Route path="/uiux" element={<UiUx />} />
        <Route path="/casestudies" element={<CaseStudies />} />
        <Route path="branding/crosia" element={<Crosia />} />
        <Route path="branding/gmp" element={<GMP />} />
        <Route path="branding/vacationv" element={<VacationV />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default AppRoutes;
