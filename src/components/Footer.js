import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-section">
      <div className="footer-container">
        <ul className="footer-nav">
          <li className="footer-nav-item">
            <a href="/">Inicio</a>
          </li>
          <li className="footer-nav-item">
            <a href="#about">Mi Perfil</a>
          </li>
          <li className="footer-nav-item">
            <a href="#proyects">Proyectos</a>
          </li>
          <li className="footer-nav-item">
            <a href="#tech">Tecnologías</a>
          </li>
          <li className="footer-nav-item">
            <a href="#contact">Contacto</a>
          </li>
        </ul>
        <div className="footer-bottom">
          <span className="footer-line"></span>
          <p>
            2023 Designed & Developed by{" "}
            <a
              href="https://www.linkedin.com/in/marchetti-lucas/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-logo-link"
            >
              LM
            </a>
            . All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
