import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

  return (
    <div className="header">
      <nav className="navbar">
        <a href="/" className="logo">
          <h2 style={{ color: "#fff", fontSize: "60px" }}>LM</h2>
        </a>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "#ffffff" }} />
          ) : (
            <FaBars size={30} style={{ color: "#ffffff" }} />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <a href="/" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" onClick={closeMenu}>
              Sobre Mi
            </a>
          </li>
          <li className="nav-item">
            <a href="#proyects" onClick={closeMenu}>
              Proyectos
            </a>
          </li>
          <li className="nav-item">
            <a href="#tech" onClick={closeMenu}>
              Tecnologias
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" onClick={closeMenu}>
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
