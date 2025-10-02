
//Dentro de este componentes separamos responsabilidad y desructuramos las props.
function DestServicios({nombre, precio, img, alt, descripcion}){
    return (
    <article className="servicios-card">
      <img
        className="servicios-img"
        src={img}
        alt={alt}
        loading="lazy"
      />

      <div className="servicios-body">
        <h3 className="servicios-nom">{nombre}</h3>
        <p className="servicios-desc">{descripcion}</p>
        <p className="servicios-precio">Precio: ${precio}</p>
      </div>
    </article>
  );
}
export default DestServicios;