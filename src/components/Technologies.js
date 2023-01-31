import React from "react";
import "./Technologies.css";
import js from "./images/js.png";
import react from "./images/react.png";
import nodejs from "./images/nodejs.png";
import redux from "./images/redux.png";
import postgresql from "./images/postgresql.png";
import html from "./images/html.png";
import bootstrap from "./images/bootstrap.png";
import css from "./images/css.png";
import postman from "./images/postman.png";

function Technologies() {
  return (
    <div className="technologies" id="tech">
      <div className="container">
        <h2>Tecnologias</h2>
        <span className="line"></span>
        <div className="content" style={{ margin: "80px" }}>
          <ul>
            <li className="nav-item">
              <img src={js} style={{ width: "80px" }} />
            </li>
            <li className="nav-item">
              <img src={react} style={{ width: "80px" }} />
            </li>
            <li className="nav-item">
              <img src={nodejs} style={{ width: "80px" }} />
            </li>
            <li className="nav-item">
              <img src={redux} style={{ width: "80px" }} />
            </li>
            <li className="nav-item">
              <img src={postgresql} style={{ width: "80px" }} />
            </li>
          </ul>
        </div>
        <div className="content2" style={{ margin: "80px" }}>
          <ul>
            <li className="nav-item">
              <img src={bootstrap} style={{ width: "80px" }} />
            </li>
            <li className="nav-item">
              <img src={html} style={{ width: "80px" }} />
            </li>
            <li className="nav-item">
              <img src={css} style={{ width: "80px" }} />
            </li>
            <li className="nav-item">
              <img src={postman} style={{ width: "100px" }} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Technologies;
