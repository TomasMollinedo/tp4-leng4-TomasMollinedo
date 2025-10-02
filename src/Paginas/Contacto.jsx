import { FormContacto } from "../Componentes/FormContacto";
import '../styles/Contacto.css';

function Contacto(){
    return (
        <section className="contacto">
        <h1 className="contacto-title">Contacto</h1>

        <div className="contacto-layout">
            <div className="contacto-col">
            <FormContacto />
            </div>
            <div className="contacto-col">
            <div className="map-box">
                <iframe
                className="map-iframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.6190583049984!2d-65.39441962376809!3d-24.739955205949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941bc14f9aaaaaab%3A0x69dac60239564277!2sUniversidad%20Cat%C3%B3lica%20de%20Salta!5e0!3m2!1ses-419!2sar!4v1759412246009!5m2!1ses-419!2sar"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen=""
                title="Ubicación"
                />
            </div>
            </div>
        </div>
        </section>
  );
}

export default Contacto;