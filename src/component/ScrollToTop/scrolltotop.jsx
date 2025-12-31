import React from "react";
import "./scrolltotop.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const scrolltotop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
};

export default scrolltotop;
