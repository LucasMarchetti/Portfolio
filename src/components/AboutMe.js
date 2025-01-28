import React from "react";
import "./AboutMe.css";
import foto from "./images/foto.png";

function AboutMe() {
  return (
    <div className="about" id="about">
      <div className="container">
        <img src={foto} alt="Foto Lucas" />
        <div className="col-2">
          <h2>Sobre Mi</h2>
          <span className="line"></span>
          <p>
            Mi formación en la Tecnicatura en Diseño de Software en la Universidad Nacional de Catamarca, junto con la especialización en Full Stack Web Development de SoyHenry, respalda mi enfoque práctico y teórico en el desarrollo de tecnologías web modernas.
          </p>
          <p>
            Con pensamiento creativo, resolución de problemas, trabajo en equipo y buena comunicación. También trabajo con metodologías SCRUM y GitFlow.
          </p>
          <h3>San Fernando del Valle de Catamarca, Catamarca, Argentina</h3>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
