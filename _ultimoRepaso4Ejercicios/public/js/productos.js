/* 
📝 Ejercicio 1 – Productos dinámicos

Enunciado:
Crea una lista de productos con dos elementos: “Smoothie” y “Tostadas”.
Cada producto debe mostrar: nombre, categoría, chef y precio.
Al hacer clic en un producto, debe abrirse un modal simple mostrando el detalle (nombre, chef, categoría, precio, descripción).
*/

const productos = [
  {
    nombre: "Smoothie",
    categoria: "Bebida / Saludable",
    chef: "Chef Laura",
    precio: 3.5,
    descripcion: "Delicioso smoothie de frutas tropicales.",
  },
  {
    nombre: "Tostadas",
    categoria: "Desayuno / Pan",
    chef: "Chef Mario",
    precio: 2.0,
    descripcion: "Tostadas crujientes con aguacate y tomate.",
  },
];

const listado = document.createElement("ul");
document.body.append(listado);

productos.map((p) => {
  const li = document.createElement("li");
  li.classList.add("producto");

  li.dataset.descripcion = p.descripcion;
  li.dataset.categoria = p.categoria;

  li.innerHTML = `<h2>${p.nombre}</h2>
                <h3>${p.chef}</h3>
                <p>${p.precio} €</p>`;
  listado.append(li);

  li.addEventListener("click", () => {

    const modal = document.createElement("div");
    modal.style.border = "1px solid black";
    modal.style.padding = "10px";

    modal.innerHTML = `<h1>${p.nombre}</h1>
                        <p>Chef: ${p.chef}</p>
                        <p>Categoría: ${p.categoria}</p>
                        <p>Precio: ${p.precio} €</p>
                        <p>${p.descripcion}</p>`;

    const btn = document.createElement("button");
    btn.innerText = "Cerrar";

    btn.addEventListener("click", () => modal.remove());
    
    modal.append(btn);

    document.body.append(modal);
  });
});
