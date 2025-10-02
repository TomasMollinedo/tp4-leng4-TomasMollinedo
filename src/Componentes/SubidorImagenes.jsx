import "../styles/SubidorImagenes.css";

function SubidorImagenes() {
  function procesar(e) {
    // Referencias a los mismos IDs que usabas
    const cajainfo = document.getElementById("cajainfo");
    const cajaimg = document.getElementById("cajaimg");

    // Limpiar columnas
    cajainfo.innerHTML = "";
    cajaimg.innerHTML = "";

    const archivos = e.target.files;
    const archivo = archivos?.[0];

    // Validación: debe existir y ser imagen
    if (!archivo || !archivo.type.match(/image.*/i)) {
      alert("El archivo seleccionado no es una imagen");
      return;
    }

    // Info del archivo
    cajainfo.innerHTML += `<strong>Nombre:</strong> ${archivo.name}<br>`;
    cajainfo.innerHTML += `<strong>Tamaño:</strong> ${Math.round(archivo.size / 1024)} KB<br>`;

    // Previsualziiar con FileReader
    const lector = new FileReader();
    lector.onload = function (ev) {
      const img = document.createElement("img");
      img.src = ev.target.result;
      cajaimg.appendChild(img);
    };
    lector.readAsDataURL(archivo);
  }

  return (
    <div className="subidor">
      <section id="cajainput">
        <h1>Trabajo práctico N°3</h1>
        <h2>Subir imagen y validar usando File API</h2>

        <label htmlFor="archivos">Selecciona una imagen </label>
        <input type="file" id="archivos" onChange={procesar} />
      </section>

      <section id="caja-resultado">
        <div id="cajainfo"></div>
        <div id="cajaimg"></div>
      </section>
    </div>
  );
}
export default SubidorImagenes;