import { FaArrowRight, FaGithub, FaLinkedin } from "react-icons/fa";
import "./Hero.css";

const stack = ["React", "Node.js", "PostgreSQL", "Redux", "Express"];

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-orb hero-orb-1" aria-hidden="true" />
      <div className="hero-orb hero-orb-2" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />

      <div className="hero-inner">
        {/* <div className="hero-badge">
          <span className="badge-dot" aria-hidden="true" />
          Disponible para trabajar
        </div> */}

        <h1 className="hero-title">
          Lucas
          <br />
          <span className="hero-gradient">Marchetti.</span>
        </h1>

        <p className="hero-role">Full Stack Web Developer</p>

        <p className="hero-desc">
          Especializado en <strong>React</strong>, <strong>Node.js</strong> y{" "}
          <strong>PostgreSQL</strong>. Construyo productos escalables y
          experiencias digitales que generan impacto real.
        </p>

        <div className="hero-actions">
          <a href="#proyects" className="btn-primary">
            Ver proyectos <FaArrowRight size={12} />
          </a>
          <a href="#contact" className="btn-outline">
            Contáctame
          </a>
        </div>

        <div className="hero-social">
          <a
            href="https://github.com/LucasMarchetti"
            target="_blank"
            rel="noreferrer"
            className="hero-social-link"
            aria-label="GitHub"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/marchetti-lucas/"
            target="_blank"
            rel="noreferrer"
            className="hero-social-link"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={18} />
          </a>
          <span className="hero-social-sep" aria-hidden="true" />
          <div className="hero-stack">
            <span className="stack-label">Stack</span>
            {stack.map((t) => (
              <span key={t} className="stack-pill">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="hero-scroll"
        aria-label="Ir a la siguiente sección"
      >
        <span className="hero-scroll-text">Scroll</span>
        <span className="hero-scroll-line" aria-hidden="true" />
      </a>
    </section>
  );
}
