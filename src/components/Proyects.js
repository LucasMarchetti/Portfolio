import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./Proyects.css";
import useInView from "../hooks/UseInView.js";

import p1 from "./images/reparo.io.png";
import p2 from "./images/2.jfif";
import p4 from "./images/4.png";
import p5 from "./images/5.png";
import p6 from "./images/6.png";

const projects = [
  {
    id: 1,
    image: p6,
    title: "Federaciones Voleibol NOA",
    description:
      "Sistema de gestión de torneos para las federaciones de voleibol del NOA Argentino (Catamarca, La Rioja, Jujuy, Santiago del Estero, Salta y Tucumán). Administración de torneos, clubes, divisiones, estadios, partidos y usuarios.",
    category: "Enterprise",
    categoryClass: "badge-purple",
    client: "Quoveryn",
    tech: ["React", "Node.js", "Express", "PostgreSQL", "JWT"],
    github: null,
    demo: "https://federaciones-noa-production.up.railway.app/",
  },
  {
    id: 2,
    image: p1,
    title: "Reparo.io",
    description:
      "Ecommerce para el hogar desarrollado en equipo de 8 personas con metodología SCRUM. Incluye carrito de compras, pasarela de pago con MercadoPago, autenticación con Google y panel de administración.",
    category: "Bootcamp",
    categoryClass: "badge-blue",
    client: "SoyHenry",
    tech: ["React", "Redux", "Node.js", "PostgreSQL", "MercadoPago"],
    github: "https://github.com/Joel301/reparo_io_FrontEnd",
    demo: null,
  },
  {
    id: 3,
    image: p4,
    title: "Vera Táctico — Catálogo",
    description:
      "Catálogo de productos desarrollado a pedido del cliente. Permite mostrar la línea completa de productos de manera profesional y organizada, con navegación fluida y diseño responsive.",
    category: "Freelance",
    categoryClass: "badge-green",
    client: "Cliente privado",
    tech: ["React", "JavaScript", "HTML5", "CSS3"],
    github: "https://github.com/LucasMarchetti/CatalogVeraTactico",
    demo: "https://veratactico.netlify.app/",
  },
  {
    id: 4,
    image: p5,
    title: "Edicosa — Imprenta",
    description:
      "Sitio web de información y contacto para Edicosa, empresa de imprenta argentina. Diseño limpio y profesional que transmite confianza, con formulario de contacto integrado.",
    category: "Freelance",
    categoryClass: "badge-green",
    client: "Edicosa",
    tech: ["React", "JavaScript", "HTML5", "CSS3"],
    github: "https://github.com/LucasMarchetti/edicosa-web",
    demo: "https://edicosa.netlify.app/",
  },
  {
    id: 5,
    image: p2,
    title: "Dog Breeds API",
    description:
      "SPA que consume la API pública de razas de perros. Búsqueda por nombre, filtrado por temperamento, ordenamiento alfabético y creación de nuevas razas almacenadas en base de datos propia con Sequelize.",
    category: "Bootcamp",
    categoryClass: "badge-blue",
    client: "SoyHenry",
    tech: ["React", "Redux", "Node.js", "Sequelize", "PostgreSQL"],
    github: "https://github.com/LucasMarchetti/PI-DOGS",
    demo: null,
  },
];

export default function Proyects() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section className="proyects" id="proyects" ref={ref}>
      <div className={`proyects-container${isInView ? " proj-visible" : ""}`}>
        <div className="proyects-header">
          <span className="section-label">Proyectos</span>
          <h2 className="section-title">
            Trabajo <span>seleccionado</span>
          </h2>
          <p className="proyects-subtitle">
            Proyectos freelance, de bootcamp y enterprise que demuestran
            capacidad técnica y enfoque en producto.
          </p>
        </div>

        <div className="proyects-grid">
          {projects.map((p, i) => (
            <article key={p.id} className="proj-card" style={{ "--delay": `${i * 0.1}s` }}>
              <div className="proj-image">
                <img src={p.image} alt={p.title} loading="lazy" />
                <div className="proj-overlay">
                  <div className="proj-overlay-actions">
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        className="overlay-btn"
                        aria-label="Ver repositorio en GitHub"
                      >
                        <FaGithub size={16} />
                        <span>GitHub</span>
                      </a>
                    )}
                    {p.demo && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="overlay-btn overlay-btn-primary"
                        aria-label="Ver demo en vivo"
                      >
                        <FaExternalLinkAlt size={13} />
                        <span>Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="proj-body">
                <div className="proj-meta">
                  <span className={`proj-badge ${p.categoryClass}`}>{p.category}</span>
                  <span className="proj-client">{p.client}</span>
                </div>

                <h3 className="proj-title">{p.title}</h3>
                <p className="proj-desc">{p.description}</p>

                <div className="proj-tech">
                  {p.tech.map((t) => (
                    <span key={t} className="proj-tag">{t}</span>
                  ))}
                </div>

                <div className="proj-links">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="proj-link"
                    >
                      <FaGithub size={14} /> Repositorio
                    </a>
                  )}
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="proj-link proj-link-demo"
                    >
                      <FaExternalLinkAlt size={11} /> Ver demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
