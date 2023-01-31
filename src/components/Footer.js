import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <ul>
          <li className="nav-item">
            <a href="/">Home</a>
          </li>
          <li className="nav-item">
            <a href="#about">Sobre Mi</a>
          </li>
          <li className="nav-item">
            <a href="#proyects">Proyectos</a>
          </li>
          <li className="nav-item">
            <a href="#tech">Tecnologias</a>
          </li>
          <li className="nav-item">
            <a href="#contact">Contacto</a>
          </li>
        </ul>
        <div className="bottom">
          <span className="line"></span>
          <p>2023 Execute by LM. All rights reserved. </p>
        </div>
      </div>
    </div>
  );
}
