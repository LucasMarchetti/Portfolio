import React from "react";
import "./Technologies.css";
import useInView from "../hooks/UseInView.js";

import js from "./images/js.png";
import react from "./images/react.png";
import nodejs from "./images/nodejs.png";
import redux from "./images/redux.png";
import postgresql from "./images/postgresql.png";
import html from "./images/html.png";
import bootstrap from "./images/bootstrap.png";
import css from "./images/css.png";
import postman from "./images/postman.png";
import python from "./images/python.png";
import figma from "./images/figma.png";
import git from "./images/git.png";
import axios from "./images/axios.svg";
import Express from "./images/Express.png";
import Sequelize from "./images/Sequelize.png";
import restApi from "./images/REST-API.jpeg";

const categories = [
  {
    label: "Frontend",
    items: [
      { src: js, name: "JavaScript" },
      { src: react, name: "React" },
      { src: redux, name: "Redux" },
      { src: html, name: "HTML5" },
      { src: css, name: "CSS3" },
      { src: bootstrap, name: "Bootstrap" },
    ],
  },
  {
    label: "Backend",
    items: [
      { src: nodejs, name: "Node.js" },
      { src: Express, name: "Express" },
      { src: python, name: "Python" },
      { src: axios, name: "Axios" },
      { src: restApi, name: "REST API" },
    ],
  },
  {
    label: "Base de Datos",
    items: [
      { src: postgresql, name: "PostgreSQL" },
      { src: Sequelize, name: "Sequelize" },
    ],
  },
  {
    label: "Herramientas",
    items: [
      { src: git, name: "Git" },
      { src: postman, name: "Postman" },
      { src: figma, name: "Figma" },
    ],
  },
];

export default function Technologies() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section className="tech" id="tech" ref={ref}>
      <div className={`tech-container${isInView ? " tech-visible" : ""}`}>
        <div className="tech-header">
          <span className="section-label">Stack tecnológico</span>
          <h2 className="section-title">
            Tecnologías que <span>domino</span>
          </h2>
        </div>

        <div className="tech-categories">
          {categories.map((cat, ci) => (
            <div key={cat.label} className="tech-cat" style={{ "--cat-delay": `${ci * 0.12}s` }}>
              <h3 className="tech-cat-label">{cat.label}</h3>
              <div className="tech-grid">
                {cat.items.map((tech, ti) => (
                  <div
                    key={tech.name}
                    className="tech-card"
                    style={{ "--item-delay": `${ci * 0.12 + ti * 0.06}s` }}
                  >
                    <div className="tech-icon-wrap">
                      <img src={tech.src} alt={tech.name} loading="lazy" />
                    </div>
                    <span className="tech-name">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
