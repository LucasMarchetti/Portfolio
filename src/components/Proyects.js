import React from "react";
import "./Proyects.css";
import p1 from "./images/reparo.io.png";
import p2 from "./images/2.jfif";
import p3 from "./images/3.png";

export default function Proyects() {
  return (
    <div className="testimonials" id="proyects">
      <div className="container">
        <h2>Proyectos</h2>
        <span className="line"></span>
        <div className="content">
          <div className="card">
            <img src={p1} alt="img1" style={{ border: "1px solid gray" }} />
            <p>
              Ecommerce para el hogar creada por 8 personas para proyecto final
              del bootcamp Soy Henry. Se implemento la metodologia SCRUM. La web
              posee carrito de compras, pasarela de pago (MercadoPago), usuario
              admin, autenticacion de Google, entre otras funcionalidades.
            </p>
            <p>
              <span>Reparo.io</span>
            </p>
            <p>Bootcamp SoyHenry</p>
            <p>
              <a
                href="https://github.com/Joel301/reparo_io_FrontEnd"
                target="_blank"
                style={{
                  color: "var(--primary-color)",
                  fontSize: "1rem",
                  fontWeight: "700",
                }}
              >
                Link a repositorio
              </a>
            </p>
          </div>
          <div className="card">
            <img src={p2} alt="img2" />
            <p>
              Proyecto consumiendo API sobre razas de perros
              (https://thedogapi.com/). Posee un landing, una pagina Home donde
              se puede buscar por letra o nombre completo, se puede filtrar por
              temperamento u ordenar alfabeticamente (A/Z o Z/A) y crear una
              nueva raza que se almacene en una base de datos con Sequelize.
            </p>
            <p>
              <span>Dog Breeds API</span>
            </p>
            <p>Bootcamp SoyHenry</p>
            <p>
              <a
                href="https://github.com/LucasMarchetti/PI-DOGS"
                target="_blank"
                style={{
                  color: "var(--primary-color)",
                  fontSize: "1rem",
                  fontWeight: "700",
                }}
              >
                Link a repositorio
              </a>
            </p>
          </div>
          <div className="card">
            <img src={p3} alt="img3" />
            <p>Portafolio creado con React, HTML, CSS</p>
            <p>
              <span>Portafolio</span>
            </p>
            <p>Proyecto propio</p>
            <p>
              <a
                href="https://github.com/LucasMarchetti/Portfolio"
                target="_blank"
                style={{
                  color: "var(--primary-color)",
                  fontSize: "1rem",
                  fontWeight: "700",
                }}
              >
                Link a repositorio
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
