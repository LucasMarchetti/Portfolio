
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


function Technologies() {
  return (
    <div className="technologies" id="tech">
      <div className="container">
        <h2>Tecnologías</h2>
        <span className="line"></span>
        <div className="content" style={{ margin: "80px" }}>
          <ul>
            <li className="nav-item">
              <img src={js} className="images" alt="img"/>
            </li>
            <li className="nav-item">
              <img src={python} className="images" alt="img"/>
            </li>
            <li className="nav-item">
              <img src={react} className="images" alt="img"/>
            </li>
            <li className="nav-item">
              <img src={nodejs} className="images" alt="img"/>
            </li>
            <li className="nav-item">
              <img src={redux} className="images" alt="img"/>
            </li>
            <li className="nav-item">
              <img src={postgresql} className="images" alt="img"/>
            </li>
          </ul>
        </div>
        <div className="content2" style={{ margin: "80px" }}>
          <ul>
            <li className="nav-item">
              <img src={figma} className="images" alt="img"/>
            </li>
            <li className="nav-item">
              <img src={bootstrap} className="images" alt="img"/>
            </li>
            <li className="nav-item">
              <img src={html} className="images" alt="img"/>
            </li>
            <li className="nav-item">
              <img src={css} className="images" alt="img"/>
            </li>
            <li className="nav-item">
              <img src={postman} className="images" alt="img" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Technologies;
