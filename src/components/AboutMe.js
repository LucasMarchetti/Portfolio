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
            Desarrollador Web Full Stack. Con experiencia trabajando con NodeJS,
            React, Redux, SQL, entre otras tecnologías del sector.
          </p>
          <p>
            Con pensamiento creativo, resolución de problemas, trabajo en
            equipo, comunicación y autodidacta. También he trabajado con
            metodologías SCRUM y GitFlow.
          </p>
          <h3>San Fernando del Valle de Catamarca, Catamarca, Argentina</h3>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
