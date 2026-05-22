import React from "react";
import "./Contact.css";
import { useForm, ValidationError } from "@formspree/react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPaperPlane,
} from "react-icons/fa";
import useInView from "../hooks/UseInView.js";

const socials = [
  {
    icon: <FaGithub size={18} />,
    label: "GitHub",
    handle: "@LucasMarchetti",
    href: "https://github.com/LucasMarchetti",
  },
  {
    icon: <FaLinkedin size={18} />,
    label: "LinkedIn",
    handle: "marchetti-lucas",
    href: "https://www.linkedin.com/in/marchetti-lucas/",
  },
  {
    icon: <FaEnvelope size={18} />,
    label: "Email",
    handle: "Envíame un mensaje",
    href: "#contact-form",
  },
];

export default function Contact() {
  const [state, handleSubmit] = useForm("xbjedzlw");
  const { ref, isInView } = useInView({ threshold: 0.15 });

  if (state.succeeded) {
    return (
      <section className="contact" id="contact">
        <div className="contact-success">
          <div className="success-icon" aria-hidden="true">✓</div>
          <h3>¡Mensaje enviado!</h3>
          <p>Gracias por contactarme. Te responderé a la brevedad.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="contact" id="contact" ref={ref}>
      <div className={`contact-container${isInView ? " contact-visible" : ""}`}>
        <div className="contact-info">
          <span className="section-label">Contacto</span>
          <h2 className="section-title">
            Trabajemos <span>juntos</span>
          </h2>
          <p className="contact-desc">
            Estoy disponible para proyectos freelance, roles en equipos y
            colaboraciones. Escríbeme y hablemos de tu idea.
          </p>

          <ul className="contact-socials">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noreferrer" : undefined}
                  className="social-card"
                >
                  <span className="social-icon">{s.icon}</span>
                  <span className="social-text">
                    <span className="social-label">{s.label}</span>
                    <span className="social-handle">{s.handle}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="contact-form-wrap" id="contact-form">
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="name">Nombre y Apellido</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Tu nombre completo"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="tu@email.com"
                required
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Asunto</label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="¿De qué quieres hablar?"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Mensaje</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Cuéntame sobre tu proyecto..."
                required
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>

            <button type="submit" disabled={state.submitting} className="form-submit">
              {state.submitting ? (
                <span className="spinner" aria-label="Enviando…" />
              ) : (
                <>
                  <FaPaperPlane size={14} />
                  Enviar mensaje
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
