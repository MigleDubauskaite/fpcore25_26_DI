class ListaNombres {
  constructor(titulo = "Mi Lista de Nombres", colorFondo = "lightyellow") {
    this.titulo = titulo;
    this.colorFondo = colorFondo;
    this.nombres = [];
    this.render();
  }

  agregarNombre(nombre) {
    this.nombres.push(nombre);
    this.render();
  }

  render() {
    let contenedor = document.querySelector(".contenedor");
    if (contenedor) contenedor.remove();

    contenedor = document.createElement("div");
    contenedor.classList.add("contenedor");
    contenedor.style.backgroundcolor = this.colorFondo;

    const tituloLista = document.createElement('h3');
    tituloLista.innerText = this.titulo;
    contenedor.append(tituloLista);

    const lista = document.createElement("ul");

    this.nombres.forEach((nombre, index) => {
      const boton = document.createElement("button");
      boton.innerText = "❌";

      const li = document.createElement("li");
      li.innerText = nombre;

      boton.addEventListener('click', () => {
          li.remove();
          
        });

        li.append(boton);
        lista.append(li);
    });
    contenedor.append(lista);
    document.body.append(contenedor);
  }
}

const lista = new ListaNombres();
lista.agregarNombre('Migle');
lista.agregarNombre('Carlos');
