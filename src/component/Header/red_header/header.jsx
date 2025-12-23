import React from "react";
import "./header.css";
import logo from "../../../assets/blogo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="logo w-header-link">
        <img src={logo} alt="Logo" />
        <h3>One Eyed Designer</h3>
      </Link>
      <div className="nav-menu-red">
        <ul>
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#getintouch">Get In Touch</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
