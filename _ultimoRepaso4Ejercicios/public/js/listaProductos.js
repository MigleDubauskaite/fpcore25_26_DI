/* 
Ejercicio – Lista de productos dinámica
📝 Enunciado:

Crea una clase llamada ListaProductos que:

Reciba un array de productos (cada uno con nombre, precio y imagen).

Genere en el documento una lista (ul) donde cada producto aparezca como una tarjeta con su imagen y su precio.

Cuando hagas clic en una tarjeta, se mostrará una pequeña ventana modal con el nombre del producto y su precio.
*/

class ListaArticulos {
  constructor(articulos) {
    this.articulos = articulos;
    this.render(); 
  }

  // Método que genera el HTML
  render() {

    const lista = document.createElement("ul");
    lista.id = "lista-articulos";
    document.body.append(lista);

    // Recorremos los artículos y los agregamos al HTML
    this.articulos.forEach((a) => {

      const li = document.createElement("li");
      li.classList.add("articulo");

      // Insertamos imagen, nombre y precio
      li.innerHTML = `
        <img src="${a.imagen}" alt="${a.nombre}" width="100">
        <h3>${a.nombre}</h3>
        <p>${a.precio} €</p>
      `;

      // Evento para abrir modal con más información
      li.addEventListener("click", () => this.mostrarModal(a));

      lista.append(li);
    });
  }

  // Método que crea un modal simple con los datos del artículo
  mostrarModal(a) {
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.style.position = "fixed";
    modal.style.top = "50%";
    modal.style.left = "50%";
    modal.style.background = "#fff";
    modal.style.padding = "20px";
    modal.style.border = "1px solid black";
    modal.style.textAlign = "center";

    modal.innerHTML = `
      <h2>${a.nombre}</h2>
      <p>Precio: ${a.precio} €</p>
      <button id="cerrar">Cerrar</button>
    `;

    // Botón para cerrar
    modal.querySelector("#cerrar").addEventListener("click", () => {
      modal.remove();
    });

    document.body.append(modal);
  }
}

// Creamos algunos artículos de ejemplo
const articulos = [
  { nombre: "Smoothie", precio: 3.5, imagen: "img/smoothie.jpg" },
  { nombre: "Tostadas", precio: 2.0, imagen: "img/tostadas.jpg" },
  { nombre: "Granola", precio: 4.2, imagen: "img/granola.jpg" },
];

// Instanciamos la clase con el array
new ListaArticulos(articulos);
