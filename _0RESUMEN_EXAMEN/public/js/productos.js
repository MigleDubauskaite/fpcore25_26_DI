// Array con los productos
const productos = [
  {
    nombre: "Acai Bowl",
    categoria: "Desayuno / Saludable",
    chef: "Chef Juan",
    precio: 2.5,
    imagen: "/img/acai.jpg",
    descripcion:
      "Un bowl lleno de acai, frutas frescas y granola, ideal para empezar el día con energía.",
  },
  {
    nombre: "Pancakes",
    categoria: "Desayuno / Dulce",
    chef: "Chef Ana",
    precio: 1.8,
    imagen: "/img/pancakes.jpg",
    descripcion:
      "Deliciosos pancakes con miel y frutas, perfectos para un desayuno dulce y nutritivo.",
  },
];

// Contenedor donde se insertarán los productos
const listadoProductos = document.querySelector("#productos");

// Usamos map para generar el HTML de cada producto
productos.map((producto) => {
  listadoProductos.innerHTML += `
    <li class="producto"
        data-descripcion="${producto.descripcion}"
        data-categoria="${producto.categoria}">
        <h2>${producto.nombre}</h2>
        <img src="${producto.imagen}" alt="Imagen de ${producto.nombre}">
        <h3>${producto.chef}</h3>
        <p>${producto.precio} €</p>
    </li>
    <br><hr><br>`;
});

// Seleccionamos todas las fichas y añadimos evento click
document.querySelectorAll(".producto").forEach((ficha) => {
  ficha.addEventListener("click", () => {
    const nombre = ficha.querySelector("h2").textContent;
    const imagen = ficha.querySelector("img").src;
    const chef = ficha.querySelector("h3").textContent;
    const precio = ficha.querySelector("p").textContent;
    const descripcion = ficha.dataset.descripcion;
    const categoria = ficha.dataset.categoria;

    const detalle = document.createElement("section");
    detalle.id = "detalle";

    detalle.innerHTML = `
      <div class="modal">
        <button>❌</button>
        <h1>${nombre}</h1>
        <img src="${imagen}" class="fichaModal">
        <p><strong>Chef:</strong> ${chef}</p>
        <p><strong>Categoría:</strong> ${categoria}</p>
        <p>${descripcion}</p>
        <p><strong>Precio:</strong> ${precio}</p>
      </div>
    `;

    document.body.append(detalle);

    // Botón de cerrar modal
    detalle.querySelector("button").addEventListener("click", () => {
      detalle.remove();
    });
  });
});
