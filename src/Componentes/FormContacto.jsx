import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/FormContacto.css';

export const FormContacto = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_cpu4k73', 'template_6oxsy3s', form.current, {
        publicKey: 'K6T8traGIvKu3-Sdm',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert("Mensaje enviado");
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="contacto-form">
      <div className="campo">
        <label htmlFor="name">Nombre</label>
        <input id="name" className="input" type="text" name="name" required autoComplete="name" />
      </div>

      <div className="campo">
        <label htmlFor="email">Email</label>
        <input id="email" className="input" type="email" name="email" required autoComplete="email" />
      </div>

      <div className="campo fila-completa">
        <label htmlFor="title">Título</label>
        <input id="title" className="input" type="text" name="title" required />
      </div>

      <div className="campo fila-completa">
        <label htmlFor="message">Mensaje</label>
        <textarea id="message" className="textarea" name="message" required />
      </div>

      <div className="fila-completa">
        <input className="boton-enviar" type="submit" value="Enviar" />
      </div>
    </form>
  );
};