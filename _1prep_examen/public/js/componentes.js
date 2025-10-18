// =============================
// Clase 1: BotonPersonalizado
// =============================
class BotonPersonalizado {
  constructor(
    colorFondo = "royalblue",
    colorTexto = "white",
    texto = "Haz clic"
  ) {
    this.colorFondo = colorFondo;
    this.colorTexto = colorTexto;
    this.texto = texto;

    // Primero creamos el botón en el DOM
    this.render();
    // Luego aplicamos los estilos
    this._aplicarEstilos();
  }

  render() {
    const btn = document.createElement("button");
    btn.classList.add("mi-btn");

    btn.innerText = this.texto;
    btn.style.backgroundColor = this.colorFondo;
    btn.style.color = this.colorTexto;

    // Evento click: muestra ventana emergente
    btn.addEventListener("click", () => {
      console.log(`Has hecho click en el botón ${this.texto}`);
      new VentanaEmergente(`Pulsaste el botón "${this.texto}"`);
    });

    // Insertar el botón en el contenedor
    document.getElementById("contenedor").append(btn);
  }

  _aplicarEstilos() {
    const estilos = document.createElement("style");
    estilos.innerText = `
      .mi-btn{
        border: none;
        border-radius: 10px;
        padding: 10px 16px;
        margin: 5px;
        font-size: 1rem;
      }
    `;
    document.head.append(estilos);
  }
}

// Crear instancias de prueba
new BotonPersonalizado("#CD2C58", "#FFF58A", "Click");
new BotonPersonalizado("green", "white", "Aceptar");
new BotonPersonalizado("red", "white", "Cancelar");

// =============================
// Clase 2: VentanaEmergente
// =============================
class VentanaEmergente {
  constructor(mensaje = "Mensaje genérico", colorFondo = "#eee") {
    this.mensaje = mensaje;
    this.colorFondo = colorFondo;
    this.crearVentana();
  }

  crearVentana() {
    const modal = document.createElement("div");
    const btnCerrar = document.createElement("button");
    modal.classList.add("ventana");
    btnCerrar.classList.add("cerrar");
    btnCerrar.innerText = "✖️";

    modal.innerText = this.mensaje;
    modal.style.backgroundColor = this.colorFondo;
    modal.append(btnCerrar);

    document.body.append(modal);

    btnCerrar.addEventListener("click", () => {
      modal.remove();
    });

    const estilos = document.createElement("style");
    estilos.innerText = `
      .ventana {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 4px 10px rgba(0,0,0,0.3);
        min-width: 200px;
        z-index: 1000;
      }
      .cerrar {
        position: absolute;
        top: 5px;
        right: 8px;
        background: red;
        color: white;
        border: none;
        border-radius: 50%;
        width: 25px;
        height: 25px;
        cursor: pointer;
      }
    `;
    document.head.append(estilos);
  }
}

// =============================
// Clase 3: TooltipPersonalizado
// =============================
class TooltipPersonalizado {
  constructor({ colorFondo = "black", colorTexto = "white" } = {}) {
    this.colorFondo = colorFondo;
    this.colorTexto = colorTexto;
    // Asociar eventos a los iconos existentes
    this.render();
  }

  mostrarTooltip(icono) {
    const tooltip = document.createElement("div");
    tooltip.innerText = icono.dataset.titulo;
    tooltip.classList.add("tooltip");

    tooltip.style.background = this.colorFondo;
    tooltip.style.color = this.colorTexto;
    tooltip.style.position = "absolute";
    tooltip.style.padding = "4px 8px";
    tooltip.style.borderRadius = "5px";
    tooltip.style.top = "-30px";
    tooltip.style.whiteSpace = "nowrap";
    tooltip.style.zIndex = 1000;

    icono.style.position = "relative"; // necesario para posicionamiento absoluto

    icono.append(tooltip);
  }

  _ocultarTooltip(icono) {
    const tooltip = icono.querySelector(".tooltip");
    if (tooltip) tooltip.remove();
  }

  render() {
    const iconos = document.querySelectorAll(".icono");
    iconos.forEach((icono) => {
      icono.addEventListener("mouseover", () => this.mostrarTooltip(icono));
      icono.addEventListener("mouseout", () => this._ocultarTooltip(icono));
    });
  }
}

// Crear instancia de tooltips con colores por defecto
new TooltipPersonalizado({ colorFondo: "gray", colorTexto: "white" });
