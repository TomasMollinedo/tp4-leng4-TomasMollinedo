import { NavLink } from 'react-router-dom';

function Encabezado (){
	return (
		<>
		<h1>Tomás Mollinedo</h1>
        <h2>45.774.449</h2>
		<nav>
			<NavLink to="/Uploader" end>
				Uploader
			</NavLink>{" | "}
			<NavLink to="/" end>
				Inicio
			</NavLink>{" | "}
			<NavLink to="/Contacto" end>
				Contacto
			</NavLink>{" | "}
			<NavLink to="/Servicios" end>
				Servicios
			</NavLink>
		</nav>
		</>
	);
}
export default Encabezado;