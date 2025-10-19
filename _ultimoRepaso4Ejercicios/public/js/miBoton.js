/* 
📝 Ejercicio 2 – Botones dinámicos

Enunciado:
Crea una clase MiBoton que genere botones con:

Texto que se pase por parámetro.

Color de fondo y de texto opcionales (si no se pasan, usar azul y blanco).

El botón debe agregarse automáticamente al body.
*/

class MiBoton {
  constructor(texto, bg = "blue", color = "white") {
    this.texto = texto;
    this.bg = bg;
    this.color = color;
    this.crear();
  }

    crear() {
    const btn = document.createElement("button");
    btn.innerText = this.texto;
    btn.style.backgroundColor = this.bg;
    btn.style.color = this.color;
    document.body.append(btn);
  }
}
new MiBoton("Aceptar", "green", "black");
new MiBoton("Cancelar");
