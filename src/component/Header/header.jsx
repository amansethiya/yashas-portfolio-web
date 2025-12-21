import React from "react";
import "./header.css";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
        <h3>One Eyed Designer</h3>
      </div>
      <div className="nav-menu">
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
