import React from "react";
import { Link } from "react-router-dom";
import Logo from "../IMG/Logo.png";

function Header() {
  return (
    <nav className="nav-content">
      <div className="nav-logo">
        <Link to="Portafolio-AnthonyLamillaV/Home">
          <img className="logo" src={Logo} alt="" />
        </Link>
      </div>
      <div className="nav-item">
        <li>
          <Link to="Portafolio-AnthonyLamillaV/Home">Home</Link>
        </li>
        <li>
          <Link to="Portafolio-AnthonyLamillaV/Projects">Projects</Link>
        </li>
        <li>
          <Link to="Portafolio-AnthonyLamillaV/Blog-Personal">
            Blog Personal
          </Link>
        </li>
      </div>
    </nav>
  );
}

export default Header;
