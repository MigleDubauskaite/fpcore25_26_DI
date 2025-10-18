const peliculas = [
  {
    titulo: "Inception",
    director: "Christopher Nolan",
    genero: "Ciencia ficción",
    precio: 9.99,
    imagen: "/img/inception.jpg",
    descripcion:
      "Un ladrón que roba secretos del subconsciente debe cumplir una misión imposible.",
  },
  {
    titulo: "Interstellar",
    director: "Christopher Nolan",
    genero: "Aventura / Ciencia ficción",
    precio: 10.99,
    imagen: "/img/interstellar.jpg",
    descripcion:
      "Un grupo de exploradores viaja a través de un agujero de gusano en busca de un nuevo hogar para la humanidad.",
  },
  {
    titulo: "Matrix",
    director: "Lana y Lilly Wachowski",
    genero: "Acción / Ciencia ficción",
    precio: 8.5,
    imagen: "/img/matrix.jpg",
    descripcion:
      "Un hacker descubre la verdadera naturaleza de su realidad y su papel en la guerra contra los controladores de la humanidad.",
  },
];

const listadoPeliculas = document.querySelector("#peliculas");

for (const pelicula of peliculas) {
  listadoPeliculas.innerHTML += `
                                    <li class="pelicula"
                                    data-descripcion="${pelicula.descripcion}" data-genero="${pelicula.genero}">
                                    <h2>${pelicula.titulo}</h2>
                                    <img src="${pelicula.imagen}" alt="Imagen de pelicula ${pelicula.titulo}">
                                    <h3>${pelicula.director}</h3>
                                    <p>${pelicula.precio} €</p>
                                    </li>
                                    <br>
                                    <br>
    `;
}

const fichasPeliculas = document.querySelectorAll(".pelicula");

console.log(fichasPeliculas);

for (const ficha of fichasPeliculas) {
  ficha.addEventListener("click", () => {
    const titulo = ficha.querySelector("h2").textContent;
    const imagen = ficha.querySelector("img").src;
    const director = ficha.querySelector("h3").textContent;
    const precio = ficha.querySelector("p").textContent;
    const descripcion = ficha.dataset.descripcion;
    const genero = ficha.dataset.genero;

    const detalle = document.createElement("section");
    detalle.id = "detalle";

    detalle.innerHTML += `
                                  <div class="modal">
                                      <button>❌</button>
                                      <h1>${titulo}</h1>
                                      <img src="${imagen}" class="fichaModal">
                                      <p>${director}</p>
                                      <p>${genero}</p>
                                      <p>${descripcion}</p>
                                      <p>${precio}</p>
                                  </div>
    `;

    document.body.append(detalle);

    document.querySelector("button").addEventListener("click", () => {
      detalle.remove();
    });
  });
}
