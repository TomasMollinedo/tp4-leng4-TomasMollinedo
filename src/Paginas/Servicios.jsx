import imgbasic from '../assets/habitacionbasica.jpg';
import imgmed from '../assets/habitacionmedium.jpg';
import imgpremium from '../assets/habitacionpremium.jpg';
import DestServicios from '../Componentes/DestServicios';
import '../styles/Servicios.css';


function Servicios(){
    
    const data = [
        {
            id: 1,
            nombre: 'Habitación Básica',
            precio: 10000,
            img: imgbasic,
            alt: 'Imagen Habitación Básica',
            descripcion: 'Una habitación cómoda y funcional para una estancia agradable.'
        },
        {
            id: 2,
            nombre: 'Habitación Medium',
            precio: 15000,
            img: imgmed,
            alt: 'Imagen Habitación Medium',
            descripcion: 'Una habitación con más espacio y comodidades para una experiencia mejorada.'
        },
        {
            id: 3,
            nombre: 'Habitación Premium',
            precio: 20000,
            img: imgpremium,
            alt: 'Imagen Habitación Premium',
            descripcion: 'Una habitación lujosa y espaciosa para una experiencia inolvidable.'
        }
    ];

    return(
        <section className="servicios">
        <h1>Servicios</h1>
        <p>Estos son nuestros servicios:</p>

        <div className="servicios-grid">
            {data.map((servicio) => (
            <DestServicios key={servicio.id} {...servicio} />
            ))}
        </div>
        </section>
    );
}
export default Servicios;