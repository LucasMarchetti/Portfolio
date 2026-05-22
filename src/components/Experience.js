import React from "react";
import "./Experience.css";
import useInView from "../hooks/UseInView.js";
import { FaMapMarkerAlt, FaExternalLinkAlt } from "react-icons/fa";
import logoCc from "../assets/logo_cc.png";

const CentrocardLogo = () => (
  <img
    src={logoCc}
    alt="Centrocard S.A."
    width="48"
    height="48"
    style={{
      borderRadius: 10,
      objectFit: "contain",
      background: "#fff",
      padding: "4px",
    }}
  />
);

const experiences = [
  {
    id: 1,
    logo: <CentrocardLogo />,
    company: "Centrocard S.A.",
    website: "https://centrocard.com.ar",
    role: "Full Stack Developer · Analista de Sistemas",
    period: "Abril 2026 — Presente",
    location: "Catamarca, Argentina",
    current: true,
    domains: ["Bancario", "Financiero"],
    description:
      "Desarrollo y mantenimiento de sistemas internos para la única tarjeta de crédito regional de Catamarca y La Rioja, con más de 40.000 socios activos. Trabajo en el ciclo completo: análisis de requerimientos, diseño de soluciones, implementación y puesta en producción.",
    responsibilities: [
      "Análisis y desarrollo de funcionalidades para sistemas de gestión bancaria y financiera.",
      "Implementación de interfaces y APIs para procesamiento de transacciones, gestión de cuentas y reportes.",
      "Colaboración con equipos internos para la mejora continua de procesos operativos.",
    ],
    tech: ["React", "Node.js", "PostgreSQL", "Express", "Git"],
  },
];

export default function Experience() {
  const { ref, isInView } = useInView({ threshold: 0.15 });

  return (
    <section className="experience" id="experience" ref={ref}>
      <div className={`exp-container${isInView ? " exp-visible" : ""}`}>
        <div className="exp-header">
          <span className="section-label">Experiencia laboral</span>
          <h2 className="section-title">
            Donde he <span>trabajado</span>
          </h2>
        </div>

        <div className="exp-timeline">
          {experiences.map((exp) => (
            <article key={exp.id} className="exp-card">
              {/* Timeline dot */}
              <div className="exp-dot" aria-hidden="true">
                <span className={exp.current ? "dot-pulse" : ""} />
              </div>

              {/* Card content */}
              <div className="exp-body">
                {/* Company header */}
                <div className="exp-company-row">
                  <div className="exp-logo">{exp.logo}</div>
                  <div className="exp-company-info">
                    <div className="exp-company-name-row">
                      <h3 className="exp-company">{exp.company}</h3>
                      <a
                        href={exp.website}
                        target="_blank"
                        rel="noreferrer"
                        className="exp-link"
                        aria-label={`Visitar sitio de ${exp.company}`}
                      >
                        <FaExternalLinkAlt size={11} />
                      </a>
                      {exp.current && (
                        <span className="exp-current-badge">Actual</span>
                      )}
                    </div>
                    <p className="exp-role">{exp.role}</p>
                    <div className="exp-meta">
                      <span className="exp-period">
                        <span className="exp-period-dot" aria-hidden="true" />
                        {exp.period}
                      </span>
                      <span className="exp-sep" aria-hidden="true">
                        ·
                      </span>
                      <span className="exp-location">
                        <FaMapMarkerAlt size={11} />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Domain badges */}
                <div className="exp-domains">
                  {exp.domains.map((d) => (
                    <span key={d} className="exp-domain-badge">
                      {d}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="exp-desc">{exp.description}</p>

                {/* Responsibilities */}
                <ul className="exp-list">
                  {exp.responsibilities.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className="exp-tech">
                  {exp.tech.map((t) => (
                    <span key={t} className="proj-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
