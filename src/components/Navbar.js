import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "#about", label: "Mi Perfil" },
  { href: "#experience", label: "Experiencia" },
  { href: "#proyects", label: "Proyectos" },
  { href: "#tech", label: "Tecnologías" },
  { href: "#contact", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className={`nav-header${scrolled ? " nav-scrolled" : ""}`}>
      <nav className="nav-inner">
        <a href="/" className="nav-logo" onClick={() => setOpen(false)}>LM</a>

        <ul className={`nav-links${open ? " nav-open" : ""}`}>
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a href={href} className="nav-link" onClick={() => setOpen(false)}>
                {label}
              </a>
            </li>
          ))}
          <li className="nav-cta-mobile">
            <a href="#contact" className="btn-primary" onClick={() => setOpen(false)}>
              Trabajemos juntos
            </a>
          </li>
        </ul>

        <a href="#contact" className="nav-cta">Trabajemos juntos</a>

        <button
          className="nav-hamburger"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </nav>
    </header>
  );
}
