/*  
🧩 Enunciado del ejercicio: “Galería de Imágenes Dinámica”

Crea una clase llamada Galeria que permita generar dinámicamente una galería de imágenes en el documento HTML.

La clase debe tener las siguientes características:

El constructor debe recibir un objeto con las siguientes propiedades:
    titulo (texto que se mostrará encima de la galería)
    columnas (cantidad de columnas que tendrá la galería; por defecto, 3)
    espaciado (separación entre imágenes; por defecto, 10px)

La clase debe tener un array interno llamado imagenes donde se guardarán los objetos de cada imagen agregada.

Debe incluir un método agregarImagen({ src, alt, descripcion })
que añada una nueva imagen al array imagenes.

Debe incluir un método render() que:
    Cree un contenedor principal (<div>) con el título y todas las imágenes agregadas.
    Cada imagen se muestre con su descripción debajo.
    Las imágenes se organicen en una cuadrícula con el número de columnas indicado en el constructor.
*/

class Galeria {
  // Constructor: inicializa la galería con título, columnas y espaciado
  constructor(titulo = "Mi Galería", columnas = 3, espaciado = "10px") {
    this.titulo = titulo; // Almacena el título de la galería
    this.columnas = columnas; // Almacena la cantidad de columnas (para calcular ancho)
    this.espaciado = espaciado; // Espacio entre imágenes
    this.imagenes = []; // Array para guardar las imágenes que se agreguen
    this.render(); // Llama al render inicial para crear el contenedor vacío
  }

  // Método render: crea o actualiza la galería en el DOM
  render() {
    // Busca si ya existe un contenedor de galería; si existe, lo elimina para actualizar
    let contenido = document.querySelector(".contenido");
    if (contenido) contenido.remove();

    // Crea el contenedor principal de la galería
    contenido = document.createElement("div");
    contenido.classList.add("contenido");

    // Aplica estilos básicos usando Flexbox
    contenido.style.display = "flex"; // Usamos flex para organizar las imágenes
    contenido.style.flexWrap = "wrap"; // Permite que las imágenes pasen a la siguiente fila
    contenido.style.gap = this.espaciado; // Espacio entre imágenes
    contenido.style.margin = "20px"; // Margen alrededor del contenedor

    // Crea el elemento <h3> que mostrará el título de la galería
    const tituloElem = document.createElement("h3");
    tituloElem.innerText = this.titulo; // Coloca el texto del título
    contenido.append(tituloElem); // Agrega el título al contenedor

    // Recorre todas las imágenes agregadas y crea los elementos correspondientes
    this.imagenes.forEach(({ src, alt, descripcion }) => {
      const figura = document.createElement("figure"); // Contenedor de cada imagen
      const imagen = document.createElement("img"); // Elemento <img>
      const descrip = document.createElement("figcaption"); // Descripción de la imagen

      imagen.src = src; // Asigna la URL de la imagen
      imagen.alt = alt; // Texto alternativo (accesibilidad)
      descrip.innerText = descripcion; // Texto descriptivo debajo de la imagen

      figura.append(imagen, descrip); // Agrega imagen y descripción al <figure>
      contenido.append(figura); // Agrega cada figura al contenedor principal
    });

    // Finalmente, agrega todo el contenedor al body del documento
    document.body.append(contenido);
  }

  // Método agregarImagen: añade una nueva imagen al array y actualiza la galería
  agregarImagen({ src, alt = "", descripcion = "" }) {
    this.imagenes.push({ src, alt, descripcion }); // Agrega el objeto de la imagen al array
    this.render(); // Vuelve a renderizar la galería
  }
}

// === Ejemplo de uso ===

// Creamos una instancia de la galería con título, columnas y espaciado
const galeria = new Galeria("Galería Flexbox", 3, "15px");

// Agregamos imágenes con su URL, texto alternativo y descripción
galeria.agregarImagen({
  src: "https://picsum.photos/id/10/300/200",
  alt: "Montañas",
  descripcion: "Hermosas montañas",
});

galeria.agregarImagen({
  src: "https://picsum.photos/id/20/300/200",
  alt: "Bosque",
  descripcion: "Un tranquilo bosque",
});

galeria.agregarImagen({
  src: "https://picsum.photos/id/30/300/200",
  alt: "Lago",
  descripcion: "Reflejo en un lago cristalino",
});
