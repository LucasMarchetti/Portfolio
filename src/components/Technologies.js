
import React from "react";
import "./Technologies.css";

// Images
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

function Technologies() {
  const technologies = [
    { src: js, name: "JavaScript" },
    { src: python, name: "Python" },
    { src: react, name: "React" },
    { src: nodejs, name: "Node.JS" },
    { src: axios, name: "Axios" },
    { src: redux, name: "Redux" },
    { src: Express, name: "Express" },
    { src: postgresql, name: "PostgreSQL" },
    { src: figma, name: "Figma" },
    { src: bootstrap, name: "Bootstrap" },
    { src: html, name: "HTML5" },
    { src: css, name: "CSS" },
    { src: postman, name: "Postman" },
    { src: Sequelize, name: "Sequelize" },
    { src: restApi, name: "APIs RESTful" },
    { src: git, name: "Git" },
  ];

  return (
    <div className="technologies" id="tech">
      <div className="container2">
        <h2>Tecnologías</h2>
        <span className="line"></span>
        <div className="grid">
          {technologies.map((tech, index) => (
            <div key={index} className="card2">
              <img src={tech.src} className="images2" alt={tech.name} />
              <p>{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Technologies;
