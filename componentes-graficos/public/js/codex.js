const productos = [
  {
    nombre: "Ketchup",
    precio: 2.5,
    descripcion: "Salsa de tomate clásica, ideal para hamburguesas y patatas.",
    imagen: "/img/ketchup.png",
  },
  {
    nombre: "Mostaza",
    precio: 1.8,
    descripcion:
      "Mostaza suave, perfecta para perritos calientes y bocadillos.",
    imagen: "/img/mostaza.png",
  },
];

/* for (const producto of productos) {
  for (const key of Object.keys(producto)) {
    if (key === "imagen") {
      info.innerHTML += `<img id="imagen" src="${producto[key]}" >`;
      console.log(`jdjvs`);
    } else {
      info.innerHTML += `<li>${producto[key]}</li>`;
  }
  }
  } */

const info = document.querySelector("#productos");

for (const producto of productos) {
  info.innerHTML += `
      <li class="card">
      <img src="${producto.imagen}" alt="${producto.nombre}" >
        <h2>${producto.nombre}</h2>
        <p class="descripcion">${producto.descripcion}</p>
        <p class="precio">${producto.precio} €</p>
        <button class="btn-comprar">Añadir al carrito</button>
      </li>
    `;
}

// al pulsar sobre img se abre la info de este producto

// solución con  <<<< detalle.classList.add("active"); >>>>>
/*
const detalle = document.createElement('div');
detalle.id = 'detalle';
document.body.append(detalle);
function ampliarInfo(nombre, descripcion, precio, imagen) {
  detalle.innerHTML = `
    <div class="modal">
      <h2>${nombre}</h2>
      <img src="${imagen}" alt="${nombre}">
      <p>${descripcion}</p>
      <p><strong>${precio} €</strong></p>
    </div>
  `;
   detalle.classList.add("active");
}
   */

/* esto habría que incluir en el for each dentro de img
onclick="ampliarInfo('${producto.nombre}', '${producto.descripcion}', ${producto.precio}, '${producto.imagen}')"
*/

function ampliarInfoLuis(){
  const mas = document.createElement('section');
  mas.setAttribute('id', 'mas');
  const figura = document.createElement('figure');
  const imagen = document.createElement('img');
  imagen.setAttribute('src', this.querySelector('img'));
  const span = document.createElement('span');
  const figcaption = document.createElement('figcaption');
  const h1 = document.createElement('h1');
  const p = document.createElement('p');
  figura.append(imagen);
  mas.append(figura);
  document.body.append(mas);
}

const fichas = document.getElementsByClassName('ficha');

for(const ficha of fichas){
  ficha.addEventListener('click', ampliarInfoLuis);
}