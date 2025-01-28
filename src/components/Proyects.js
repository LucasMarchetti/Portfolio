import React from "react";
import "./Proyects.css";
import p1 from "./images/reparo.io.png";
import p2 from "./images/2.jfif";
import p3 from "./images/3.png";
import p4 from "./images/4.png";
import p5 from "./images/5.png";

export default function Proyects() {
  return (
    <div className="proyects" id="proyects">
      <div className="container">
        <h2>Proyectos</h2>
        <span className="line"></span>
        <div className="content">
          <div className="card">
            <img src={p1} alt="Reparo.io" />
            <p>
              Ecommerce para el hogar creada por 8 personas para proyecto final
              del bootcamp Soy Henry. Se implementó la metodología SCRUM. La web
              posee carrito de compras, pasarela de pago (MercadoPago), usuario
              admin, autenticación de Google, entre otras funcionalidades.
            </p>
            <p>
              <span>Reparo.io</span>
            </p>
            <p>Bootcamp SoyHenry</p>
            <p>
              <a
                href="https://github.com/Joel301/reparo_io_FrontEnd"
                target="_blank"
                rel="noreferrer"
                className="link"
              >
                Link a repositorio
              </a>
            </p>
          </div>
          <div className="card">
            <img src={p2} alt="Dog Breeds API" />
            <p>
              Proyecto consumiendo API sobre razas de perros (https://thedogapi.com/).
              Posee un landing, una página Home donde se puede buscar por letra
              o nombre completo, se puede filtrar por temperamento u ordenar
              alfabéticamente (A/Z o Z/A) y crear una nueva raza que se almacene
              en una base de datos con Sequelize.
            </p>
            <p>
              <span>Dog Breeds API</span>
            </p>
            <p>Bootcamp SoyHenry</p>
            <p>
              <a
                href="https://github.com/LucasMarchetti/PI-DOGS"
                rel="noreferrer"
                target="_blank"
                className="link"
              >
                Link a repositorio
              </a>
            </p>
          </div>
          <div className="card">
            <img src={p3} alt="Portafolio" />
            <p>Portafolio creado con React, HTML, CSS</p>
            <p>
              <span>Portafolio</span>
            </p>
            <p>Proyecto propio</p>
            <p>
              <a
                href="https://github.com/LucasMarchetti/Portfolio"
                rel="noreferrer"
                target="_blank"
                className="link"
              >
                Link a repositorio
              </a>
            </p>
          </div>
          <div className="card">
            <img src={p4} alt="Vera Táctico - Catálogo" />
            <p>
              Catálogo diseñado a pedido de un cliente. El mismo necesitaba una
              página básica para poder mostrar sus productos y quedó muy conforme
              con el resultado. Pronto se le agregarán funcionalidades para mejorar
              la interfaz y practicidad para sus clientes. Tecnologías utilizadas:
              JavaScript, HTML, CSS y React.
            </p>
            <p>
              <span>Vera Táctico - Catálogo</span>
            </p>
            <p>Freelance</p>
            <p className="repo-links">
              <a
                href="https://github.com/LucasMarchetti/CatalogVeraTactico"
                rel="noreferrer"
                target="_blank"
                className="link"
              >
                Link a repositorio
              </a>
              <a
                href="https://veratactico.netlify.app/"
                rel="noreferrer"
                target="_blank"
                className="link"
              >
                Link a web
              </a>
            </p>
          </div>
          <div className="card">
            <img src={p5} alt="Edicosa - Imprenta" />
            <p>
              Página web de información y contacto para la empresa Edicosa (Argentina).
              Tecnologías utilizadas: JavaScript, HTML, CSS y React.
            </p>
            <p>
              <span>Edicosa - Imprenta</span>
            </p>
            <p>Freelance</p>
            <p className="repo-links">
              <a
                href="https://github.com/LucasMarchetti/edicosa-web"
                rel="noreferrer"
                target="_blank"
                className="link"
              >
                Link a repositorio
              </a>
              <a
                href="https://edicosa.netlify.app/"
                rel="noreferrer"
                target="_blank"
                className="link"
              >
                Link a web
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
