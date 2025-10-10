class VentanaModal {
  constructor(texto, bgColor) {
    this.texto = texto || "Hello";
    this.bgColor = bgColor || "grey";
    this.mostrar();
    this.crearEstilos();
  }

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
    document.head.append(estilos);
  }

  mostrar() {
    const pantalla = document.createElement("div");
    const button = document.createElement("button");

    pantalla.innerText = this.texto;
    pantalla.style.backgroundColor = this.bgColor;

    pantalla.classList.add("estilos");
    button.classList.add("boton");

    button.innerText = "X";

    button.addEventListener("click", () => {
      pantalla.remove();
    });

    document.body.append(pantalla);
    pantalla.append(button);
  }
}

const ventana = new VentanaModal();
