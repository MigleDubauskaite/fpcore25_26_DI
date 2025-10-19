class TarjetaUsuario {
  // Constructor: inicializa la tarjeta con nombre, ocupación y color de fondo
  constructor(
    nombre = "Usuario Anónimo", // Valor por defecto si no se pasa nombre
    ocupacion = "Sin especificar", // Valor por defecto si no se pasa ocupación
    colorFondo = "lightblue" // Color de fondo por defecto
  ) {
    this.nombre = nombre;
    this.ocupacion = ocupacion;
    this.colorFondo = colorFondo;

    this.render(); // Crea los elementos HTML de la tarjeta
    this.estilos(); // Aplica estilos CSS
  }

  // Método render: crea la tarjeta en el DOM
  render() {
    const cajitaInfo = document.createElement("div"); // Contenedor principal
    cajitaInfo.classList.add("cajita"); // Le asignamos clase para CSS

    // Div para mostrar el nombre
    const nombreT = document.createElement("div");
    nombreT.classList.add("nombre");
    nombreT.innerText = this.nombre;

    // Div para mostrar la ocupación
    const ocupacionT = document.createElement("div");
    ocupacionT.classList.add("ocupacion");
    ocupacionT.innerText = this.ocupacion;

    // Botón de cerrar
    const btnCerrar = document.createElement("button");
    btnCerrar.classList.add("btn");
    btnCerrar.innerText = "❌";

    // Se asigna el color de fondo definido
    cajitaInfo.style.backgroundColor = this.colorFondo;

    // Evento para cerrar la tarjeta
    btnCerrar.addEventListener("click", () => {
      cajitaInfo.remove();
    });

    // Se agregan los elementos al contenedor
    cajitaInfo.append(nombreT, ocupacionT, btnCerrar);

    // Se agrega la tarjeta al body
    document.body.append(cajitaInfo);
  }

  // Método estilos: agrega CSS dinámicamente al documento
  estilos() {
    const estilos = document.createElement("style");

    estilos.innerText = `
    body {
      font-family: Arial, sans-serif;
      background-color: #f5f5f5;
      margin: 0;
      padding: 20px;
      display: flex;
      flex-wrap: wrap;
      gap: 15px;
    }

    .cajita {
      background-color: lightblue;
      border-radius: 10px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.2);
      width: 200px;
      min-height: 120px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 15px;
      position: relative;
      transition: transform 0.2s ease;
    }

    .nombre {
      font-weight: bold;
      font-size: 1.1em;
      margin-bottom: 5px;
    }

    .ocupacion { 
      font-size: 0.95em;
      margin-bottom: 10px;
      color: #333;
    }

    .btn {
      background-color: crimson;
      color: white;
      border: none;
      border-radius: 5px;
      padding: 5px 8px;
      cursor: pointer;
      font-size: 0.9em;
    }
  `;

    document.head.append(estilos); // Se agregan los estilos al head
  }
}

new TarjetaUsuario();
const usuario1 = new TarjetaUsuario(
  "Laura Gómez",
  "Diseñadora UX",
  "lightcoral"
);
const usuario2 = new TarjetaUsuario(
  "Carlos Pérez",
  "Desarrollador Web",
  "lightgreen"
);
