/* 
📝 Ejercicio 4 – Ventana Modal simple

Enunciado:
Crea una clase Modal que muestre un mensaje y un botón “Cerrar”.

El fondo de la ventana debe ser gris por defecto, pero se puede cambiar al crear el objeto.

Al hacer clic en el botón, la ventana desaparece.
*/

class Modal {
  constructor(texto = "Hola", bg = "grey") {
    this.texto = texto;
    this.bg = bg;
    this.mostrar();
  }

  mostrar() {
    const ventana = document.createElement("div");
    ventana.style.backgroundColor = this.bg;
    ventana.style.padding = "20px";
    ventana.style.border = "1px solid black";
    ventana.innerText = this.texto;

    const btn = document.createElement("button");
    btn.innerText = "Cerrar";
    btn.addEventListener("click", () => ventana.remove());
    ventana.append(btn);

    document.body.append(ventana);
  }
}

new Modal("¡Bienvenido!", "lightblue");
new Modal();
