import { Routes, Route } from "react-router-dom";

import Header from "../component/Header/header";
import Footer from "../component/footer/footer";
import Home from "../pages/home/home";
import Branding from "../pages/branding/branding";
import Crosia from "../pages/branding/crosia/crosia";

const AppRoutes = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/branding" element={<Branding />} />
        <Route path="branding/crosia" element={<Crosia />} />
      </Routes>

      <Footer />
    </>
  );
};

export default AppRoutes;
