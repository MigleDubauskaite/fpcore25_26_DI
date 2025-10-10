const productos = [
  {
    nombre: "Ketchup",
    precio: 2.5,
    descripcion: "Salsa de tomate clásica, ideal para hamburguesas y patatas.",
    imagen: "ketchup.png",
  },
  {
    nombre: "Mostaza",
    precio: 1.8,
    descripcion:
      "Mostaza suave, perfecta para perritos calientes y bocadillos.",
    imagen: "mostaza.png",
  },
];

const listaProductos = document.getElementById("productos");

productos.map((pro) => {
  console.log(pro.nombre);
  const li = document.getElementById;
  listaProductos.innerHTML += `<li>
 <div class="ficha" data-descripcion="${pro.descripcion}">
 <figure>
 <img src="img/${pro.imagen}">
 <figcaption>
 <h1>${pro.nombre}</h1>
 <span class="precio">${pro.precio}€</span>
 </figcaption>
 </figure>
 </div>
 </li>`;
});

function ampliarInfo() {
  const mas = document.createElement("section");
  mas.setAttribute("id", "mas");
  const figura = document.createElement("figure");
  const imagen = document.createElement("img");
  imagen.setAttribute("src", this.querySelector("img").src);
  const span = document.createElement("span");
  const figcaption = document.createElement("figcaption");
  const h1 = document.createElement("h1");
  const p = document.createElement("p");
  p.innerText = this.dataset.descripcion;
  figura.append(imagen);
  mas.append(figura, p);
  document.body.append(mas);
}

const fichas = document.getElementsByClassName("ficha");

for (let ficha of fichas) {
  ficha.addEventListener("click", ampliarInfo);
}

document.getElementById('boton-menu').addEventListener('click', () => {
  document.querySelector('#menu-principal ul').classList.toggle('abierto');
})
