import React from "react";
import "./Contact.css";
import { useForm, ValidationError } from "@formspree/react";

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
          <input type="text" placeholder="Juan Perez"></input>

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="juan@gmail.com"
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
            También puedes buscarme en 
          </p>
          <div className="btns-contact">
            <button className="button" style={{backgroundColor:"#534ef3"}}>
              <a
                href="https://github.com/LucasMarchetti"
                rel="noreferrer"
                target="_blank"
                style={{
                  color: "white",
                  fontSize: "1rem",
                  fontWeight: "700",
                  marginTop:"10px"
                }}
              >
                GitHub
              </a>
            </button>
            <p> ó</p>
            <button className="button" style={{backgroundColor:"#534ef3"}}>
              <a
                  href="https://www.linkedin.com/in/marchetti-lucas/"
                  rel="noreferrer"
                  target="_blank"
                  style={{
                    color: "white",
                    fontSize: "1rem",
                    fontWeight: "700",
                    marginTop:"10px"
                  }}
                >
                  LinkedIn
                </a>
            </button>
          </div>
        </div>
    </div>
  );
}
