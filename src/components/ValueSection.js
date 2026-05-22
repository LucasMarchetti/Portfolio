import React from "react";
import "./ValueSection.css";
import useInView from "../hooks/UseInView.js";
import {
  FaRocket,
  FaCogs,
  FaComments,
  FaLayerGroup,
  FaSyncAlt,
} from "react-icons/fa";

const cards = [
  {
    icon: <FaRocket />,
    title: "Productos reales, no prototipos",
    body: "Experiencia construyendo aplicaciones en producción: sistemas de gestión, plataformas de torneos, tiendas online y portales internos orientados a casos de uso concretos.",
  },
  {
    icon: <FaCogs />,
    title: "Autonomía técnica",
    body: "Capacidad para analizar requisitos, elegir el stack adecuado, proponer alternativas y resolver bloqueos técnicos sin depender de supervisión constante.",
  },
  {
    icon: <FaComments />,
    title: "Comunicación en remoto",
    body: "Hábitos de documentación clara, uso de herramientas colaborativas y comunicación asíncrona efectiva para equipos distribuidos en distintos husos horarios.",
  },
  {
    icon: <FaLayerGroup />,
    title: "Escalabilidad y mantenimiento",
    body: "Arquitecturas limpias, separación de responsabilidades y patrones reutilizables para que el código sea fácil de extender, depurar y mantener en el tiempo.",
  },
  {
    icon: <FaSyncAlt />,
    title: "Mejora continua",
    body: "Mentalidad de aprendizaje activo: revisión constante de procesos, adopción de nuevas herramientas cuando aportan valor y búsqueda de oportunidades de optimización.",
  },
];

export default function ValueSection() {
  const { ref, isInView } = useInView({ threshold: 0.15 });

  return (
    <section className="value" id="value" ref={ref}>
      <div className={`value-container${isInView ? " value-visible" : ""}`}>
        <div className="value-header">
          <span className="section-label">Propuesta de valor</span>
          <h2 className="section-title">
            ¿Qué puedo aportar<br />
            <span>a tu proyecto?</span>
          </h2>
          <p className="value-subtitle">
            Puedo integrarme rápidamente a tu equipo, asumir responsabilidad
            sobre módulos críticos y ayudarte a construir soluciones mantenibles,
            escalables y alineadas a los objetivos del negocio.
          </p>
        </div>

        <div className="value-grid">
          {cards.map((card, i) => (
            <article key={i} className="value-card">
              <div className="value-icon" aria-hidden="true">
                {card.icon}
              </div>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
