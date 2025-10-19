const videojuegos = [
  {
    titulo: "The Legend of Zelda: Breath of the Wild",
    plataforma: "Nintendo Switch",
    genero: "Aventura / RPG",
    precio: 59.99,
    imagen:
      "https://upload.wikimedia.org/wikipedia/en/0/0b/The_Legend_of_Zelda_Breath_of_the_Wild.jpg",
    descripcion:
      "Explora un vasto mundo abierto lleno de secretos y aventuras épicas.",
  },
  {
    titulo: "Cyberpunk 2077",
    plataforma: "PC",
    genero: "Acción / RPG",
    precio: 49.99,
    imagen:
      "https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg",
    descripcion:
      "Sumérgete en una ciudad futurista con misiones intensas y personalización profunda.",
  },
  {
    titulo: "God of War",
    plataforma: "PS5",
    genero: "Acción / Aventura",
    precio: 69.99,
    imagen:
      "https://upload.wikimedia.org/wikipedia/en/a/a7/God_of_War_4_cover.jpg",
    descripcion:
      "Acompaña a Kratos y su hijo en una aventura épica llena de mitología nórdica.",
  },
  {
    titulo: "Halo Infinite",
    plataforma: "Xbox",
    genero: "Shooter / Ciencia ficción",
    precio: 59.99,
    imagen: "https://upload.wikimedia.org/wikipedia/en/e/e3/Halo_Infinite.png",
    descripcion:
      "Vive la última entrega de Halo con combates intensos y un universo expandido.",
  },
];

const listaJuegos = document.getElementById("juegos");

for (const juego of videojuegos) {
  listaJuegos.innerHTML += `
    <li class="juego" data-descripcion="${juego.descripcion}" data-genero="${juego.genero}">
      <h2>${juego.titulo}</h2>
      <img src="${juego.imagen}" alt="${juego.titulo}">
      <h3>${juego.plataforma}</h3>
      <p>${juego.precio} €</p>
    </li>
  `;
}

// 🔹 Aquí fuera del for principal
const infoJuegos = document.querySelectorAll(".juego");

for (const info of infoJuegos) {
  info.addEventListener("click", () => {
    const titulo = info.querySelector("h2").textContent;
    const imagen = info.querySelector("img").src;
    const plataforma = info.querySelector("h3").textContent;
    const precio = info.querySelector("p").textContent;
    const descripcion = info.dataset.descripcion;
    const genero = info.dataset.genero;

    const detalleJuego = document.createElement("section");
    detalleJuego.id = "detalle";

    detalleJuego.innerHTML = `
      <div class="modal">
        <button>❌</button>
        <h2>${titulo}</h2>
        <img src="${imagen}" class="fichaModal">
        <h3>${plataforma}</h3>
        <p>${genero}</p>
        <p>${precio}</p>
        <p>${descripcion}</p>
      </div>
    `;

    document.body.append(detalleJuego);

    // 🔹 Botón para cerrar el modal
    detalleJuego.querySelector("button").addEventListener("click", () => {
      detalleJuego.remove();
    });
  });
}

estilos();
