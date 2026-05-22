import React from "react";
import "./AboutMe.css";
import foto from "./images/foto.png";
import useInView from "../hooks/UseInView.js";

export default function AboutMe() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section className="about" id="about" ref={ref}>
      <div className={`about-container${isInView ? " about-visible" : ""}`}>
        <div className="about-card">
          <div className="about-image-wrapper">
            <div className="about-image-ring">
              <img src={foto} alt="Lucas Marchetti" />
            </div>
          </div>

          <div className="about-text">
            <h2>Sobre mí</h2>
            <span className="about-divider" aria-hidden="true" />

            <p className="about-intro">
              Soy desarrollador web <strong>full stack</strong> especializado en{" "}
              <strong>React, Node.js y PostgreSQL</strong>. Me enfoco en construir
              productos que se usan en producción, no solo prototipos.
            </p>

            <p>
              Estudio la <strong>Tecnicatura en Diseño de Software</strong> en la
              Universidad Nacional de Catamarca y completé la especialización en{" "}
              <strong>Full Stack Web Development</strong> de SoyHenry, combinando
              base teórica con experiencia práctica en proyectos reales.
            </p>

            <p>
              Trabajo con <strong>React, Redux Toolkit, Node.js, Express,
              PostgreSQL y Sequelize</strong>, aplicando <strong>GitFlow</strong> y
              metodologías ágiles como <strong>Scrum</strong> y <strong>Kanban</strong>.
            </p>

            <div className="about-tags">
              <span>Full Stack Developer</span>
              <span>React · Node.js · PostgreSQL</span>
              <span>Enfoque en producto</span>
            </div>

            <p className="about-location">
              Argentina · Disponible para trabajo remoto
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
