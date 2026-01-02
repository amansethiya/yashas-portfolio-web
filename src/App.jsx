import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const [loaded, setLoaded] = useState(false);
  const location = useLocation();

  // Page load fade (runs once)
  useEffect(() => {
    setLoaded(true);
  }, []);

  // 🔥 Scroll animation observer (runs on every route change)
  useEffect(() => {
    const sections = document.querySelectorAll(".scroll-section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target); // animate once
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((section) => {
      section.classList.remove("show"); // reset on route change
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, [location.pathname]); // ✅ THIS FIXES BACK BUTTON ISSUE

  return (
    <div className={`page-wrapper ${loaded ? "loaded" : ""}`}>
      <AppRoutes />
    </div>
  );
}

export default App;
