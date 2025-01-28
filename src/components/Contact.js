import React from "react";
import "./Contact.css";
import { useForm, ValidationError } from "@formspree/react";
import LinkedinImage from "../components/images/linkedin.png"
import GitHubImage from "../components/images/github.png"

export default function Contact() {
  const [state, handleSubmit] = useForm("xbjedzlw");

  if (state.succeeded) {
    return (
      <div className="response">
        <p>Gracias por contactarme, te escribire pronto!</p>
      </div>
    );
  }

  return (
    <div className="contact" id="contact">
      <div className="container">
        <h2>Contacto</h2>
        <span className="line"></span>



        <form onSubmit={handleSubmit}>
          <label>Nombre Y Apellido</label>
          <input type="text" placeholder="Escriba su nombre completo..."></input>

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="ejemplo@gmail.com"
          ></input>
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <label>Asunto</label>
          <input 
          type="text"
          placeholder="Escriba aqui un asunto..."
          ></input>

          <label>Mensaje</label>
          <textarea
            id="message"
            name="message"
            rows="6"
            placeholder="Escriba aqui su mensaje..."
            style={{
              boxShadow: "0 3px 10px rgb(0, 0, 0, 0.2)",
            }}
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />

          <button className="button" type="submit" disabled={state.submitting}>
            Enviar
          </button>
        </form>
      </div>
      <div className="btns">
          <p>
            También puedes encontrarme en :
          </p>
          <div className="btns-contact">
            <ul class="wrapper">

              <li className="icon twitter">
                <span className="tooltip">GitHub</span>
                <a 
                  href="https://github.com/LucasMarchetti" 
                  target="_blank" 
                  rel="noreferrer"
                >
                  <img 
                    src={GitHubImage} 
                    alt="GitHub-Image" 
                    className="icon-red-social" 
                  />
                </a>
              </li>

              <li className="icon twitter">
                <span className="tooltip">LinkedIn</span>
                <a 
                  href="https://www.linkedin.com/in/marchetti-lucas/" 
                  target="_blank" 
                  rel="noreferrer"
                >
                  <img 
                    src={LinkedinImage} 
                    alt="LinkedIn-Image" 
                    className="icon-red-social" 
                  />
                </a>
              </li>

            </ul>
          </div>
        </div>
    </div>
  );
}
