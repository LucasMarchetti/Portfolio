import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "#about", label: "Mi Perfil" },
  { href: "#experience", label: "Experiencia" },
  { href: "#proyects", label: "Proyectos" },
  { href: "#tech", label: "Tecnologías" },
  { href: "#contact", label: "Contacto" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <a href="/" className="footer-logo">LM</a>
          <nav className="footer-nav" aria-label="Footer navigation">
            <ul>
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <a href={href} className="footer-link">{label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="footer-social">
            <a
              href="https://github.com/LucasMarchetti"
              target="_blank"
              rel="noreferrer"
              className="footer-icon"
              aria-label="GitHub"
            >
              <FaGithub size={17} />
            </a>
            <a
              href="https://www.linkedin.com/in/marchetti-lucas/"
              target="_blank"
              rel="noreferrer"
              className="footer-icon"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={17} />
            </a>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} Lucas Marchetti. Todos los derechos reservados.
          </p>
          <p className="footer-made">
            Diseñado y desarrollado con
            <span aria-hidden="true"> ♥ </span>
            en Argentina
          </p>
        </div>
      </div>
    </footer>
  );
}
