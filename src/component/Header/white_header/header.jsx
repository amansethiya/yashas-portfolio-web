import { useState } from "react";
import "./header.css";
import logo from "../../../assets/blogo.png";
import clos_b from "../../../assets/tog_b.svg";
import tog_b from "../../../assets/clos_b.svg";
import { Link } from "react-router-dom";
import resume from "../../../assets/resume.pdf";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header-w">
      {/* Logo */}
      <Link to="/" className="logo-w" onClick={() => setMenuOpen(false)}>
        <img src={logo} alt="One Eyed Designer logo" />
        <h3>One Eyed Designer</h3>
      </Link>

      {/* Desktop Nav */}
      <nav className="nav-menu-w desktop">
        <ul>
          <li>
            <a href={resume} target="_blank" rel="noopener noreferrer">
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
      <button className="menu-toggle-w" onClick={() => setMenuOpen(true)}>
        <img src={tog_b} alt="Open menu" />
      </button>

      {/* Mobile Fullscreen Menu */}
      <div className={`mobile-menu-w ${menuOpen ? "open" : ""}`}>
        <button className="menu-close-w" onClick={() => setMenuOpen(false)}>
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
