// Clase que crea botones dinámicamente
class Boton {
  constructor(
    bgColor = "violet",
    color = "white",
    texto = "Botón por defecto"
  ) {
    this.bgColor = bgColor;
    this.color = color;
    this.texto = texto;
    this.crearEstilos();
    this.render();
  }

  // Crea un estilo CSS simple y lo añade al <head>
  crearEstilos() {
    const estilos = document.createElement("style");
    estilos.innerText = `.mio { border: 0; border-radius: 20px; }`;
    document.head.append(estilos);
  }

  // Renderiza el botón en el body
  render() {
    const btn = document.createElement("button");
    btn.innerText = this.texto; // Texto del botón
    btn.style.backgroundColor = this.bgColor; // Color de fondo
    btn.style.color = this.color; // Color del texto
    btn.classList.add("mio"); // Clase para estilos
    document.body.append(btn); // Inserta el botón en el body
  }
}

const boton1 = new Boton("green", "yellow", "Dale ahí");
// Con colores personalizados

const boton2 = new Boton();
// Con valores por defecto
