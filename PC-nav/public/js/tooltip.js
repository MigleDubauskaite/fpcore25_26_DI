class Tooltip {
  constructor({ fondo = "black", texto = "white" }) {
    this.fondo = fondo;
    this.texto = texto;
    this.render();
  }

  render() {
    /* ponernos encima de  icono floppy disk y que nos salga mensaje guardar cambios */
    const iconos = document.getElementsByClassName("icono");

    for (const icono of iconos) {
      icono.addEventListener("mouseover", (e) => {
        icono.style.position = "relative";
        const etiqueta = document.createElement("div");
        etiqueta.innerText = icono.dataset.titulo;

        etiqueta.style.position = "absolute";
        etiqueta.style.bottom = "100%"; // encima del icono
        etiqueta.style.background = this.fondo;
        etiqueta.style.color = this.texto;
        etiqueta.style.borderRadius = "5px";
        etiqueta.style.whiteSpace = "nowrap";
        etiqueta.style.zIndex = "1000";

        icono.append(etiqueta);

        icono.addEventListener("mouseout", () => {
          etiqueta.remove();
        });
      });
    }
  }
}

new Tooltip({ fondo: "grey", texto: "purple" });
