import React from "react";
import { Link } from "react-router-dom";
import Logo from "../IMG/Logo.png";

function Header() {
  return (
    <nav className="nav-content">
      <div className="nav-logo">
        <Link to="/Home">
          <img className="logo" src={Logo} alt="" />
        </Link>
      </div>
      <div className="nav-item">
        <li>
          <Link to="/Home">Home</Link>
        </li>
        <li>
          <Link to="/Projects">Projects</Link>
        </li>
        <li>
          <Link to="/Blog-Personal">Blog Personal</Link>
        </li>
      </div>
    </nav>
  );
}

export default Header;
