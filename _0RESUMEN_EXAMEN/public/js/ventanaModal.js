// Clase que crea una ventana modal simple
class VentanaModal {
  constructor(texto="Hello", bgColor="grey") {
    this.texto = texto;  
    this.bgColor = bgColor;
    this.mostrar();          
    this.crearEstilos();      
  }

  // Crea estilos CSS básicos para la ventana y el botón
  crearEstilos() {
    const estilos = document.createElement("style");
    estilos.innerText = `
      .estilos {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        width: 300px;
        min-height: 100px;
        background-color: white;
        border-radius: 10px;
        box-shadow: 0px 4px 10px rgba(0,0,0,0.3);
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      .boton {
        background-color: red;
        color: white;
        border: none;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        font-weight: bold;
        cursor: pointer;
      }
    `;
    document.head.append(estilos); // Insertamos los estilos en el head
  }

  // Muestra la ventana modal en el body
  mostrar() {
    const pantalla = document.createElement("div"); // Contenedor principal
    const button = document.createElement("button"); // Botón de cerrar

    pantalla.innerText = this.texto;            // Texto de la ventana
    pantalla.style.backgroundColor = this.bgColor; // Fondo de la ventana

    pantalla.classList.add("estilos"); // Clase para estilos
    button.classList.add("boton");     // Clase para el botón
    button.innerText = "X";            // Texto del botón

    // Evento para cerrar la ventana
    button.addEventListener("click", () => {
      pantalla.remove();
    });

    // Añadimos la ventana al body y el botón dentro
    document.body.append(pantalla);
    pantalla.append(button);
  }
}

// Creamos una ventana al cargar la página
const ventana = new VentanaModal();
