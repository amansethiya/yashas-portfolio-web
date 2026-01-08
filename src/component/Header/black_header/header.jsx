import { useState } from "react";
import "./header.css";
import logo from "../../../assets/logo.png";
import tog_b from "../../../assets/tog_b.svg";
import clos_b from "../../../assets/clos_b.svg";
import { Link } from "react-router-dom";
import resume from "../../../../public/resume.pdf";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header-b">
      {/* Logo */}
      <Link to="/" className="logo-b" onClick={() => setMenuOpen(false)}>
        <img src={logo} alt="One Eyed Designer logo" />
        <h3>One Eyed Designer</h3>
      </Link>

      {/* Desktop Nav */}
      <nav className="nav-menu-b desktop">
        <ul>
          <li>
            <a href="./resume.pdf" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </li>
          <li>
            <Link to="/#work">Work</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Toggle Button */}
      <button className="menu-toggle-b" onClick={() => setMenuOpen(true)}>
        <img src={tog_b} alt="Open menu" />
      </button>

      {/* Mobile Fullscreen Menu */}
      <div className={`mobile-menu-b ${menuOpen ? "open" : ""}`}>
        <button className="menu-close-b" onClick={() => setMenuOpen(false)}>
          <img src={clos_b} alt="Close menu" />
        </button>

        <ul>
          <li>
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
            >
              Resume
            </a>
          </li>
          <li>
            <Link to="/#work" onClick={() => setMenuOpen(false)}>
              Work
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              About
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
