import React from "react";
import "./AboutMe.css";
import foto from "./images/foto.png";

function AboutMe() {
  return (
    <div className="about" id="about">
      <div className="container">
        <img src={foto} alt="Foto Lucas" />
        <div className="col-2">
          <h2>Mi Perfil</h2>
          <span className="line"></span>
          <p>
            Estudiante de la Tecnicatura en Diseño de Software en la Universidad Nacional de Catamarca (Arg), junto con la especialización en Full Stack Web Development de SoyHenry, respaldo mi enfoque práctico y teórico en el desarrollo de tecnologías web modernas.
          </p>
          <p>
            Con pensamiento creativo, resolución de problemas, trabajo en equipo y buena comunicación. Trabajo con GitFlow y con metodologías agiles como SCRUM y Kanban.
          </p>
          <h3>San Fernando del Valle de Catamarca, Catamarca, Argentina</h3>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
