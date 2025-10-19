class Formulario {
  // Constructor: inicializa la instancia del formulario
  constructor({ accion, metodo = "GET", boton = "Enviar" }) {
    this.accion = accion; // URL a la que se enviará el formulario
    this.metodo = metodo; // Método de envío (GET por defecto)
    this.boton = boton; // Texto que aparecerá en el botón de envío
    this.campos = []; // Array para guardar los inputs
    this.areas = []; // Array para guardar los textareas
  }

  // Método para agregar un input al formulario
  crearCampos({ nombre, tipo, etiqueta }) {
    // Se guarda un objeto con las propiedades del input
    this.campos.push({ nombre, tipo, etiqueta });
    this.render();
  }

  // Método para agregar un textarea al formulario
  crearAreas({ nombre, etiqueta }) {
    // Se guarda un objeto con las propiedades del textarea
    this.areas.push({ nombre, etiqueta });
    this.render();
  }

  // Método render: crea el formulario en el DOM
  render() {
    // Elimina el formulario anterior si ya existe
    const formExistente = document.querySelector("form");
    if (formExistente) formExistente.remove();

    const form = document.createElement("form"); // Crea el elemento <form>
    const boton = document.createElement("button"); // Crea el botón de envío

    boton.classList.add("btn"); // Se le asigna una clase para estilos
    boton.innerText = this.boton; // Texto del botón

    // Se asignan los atributos action y method al formulario
    form.setAttribute("action", this.accion);
    form.setAttribute("method", this.metodo);

    // Recorre todos los inputs y los agrega al formulario
    this.campos.forEach(({ etiqueta, nombre, tipo }) => {
      const label = document.createElement("label"); // Crea el label
      const input = document.createElement("input"); // Crea el input

      label.innerText = etiqueta; // Texto que verá el usuario
      input.name = nombre; // Nombre del input
      input.type = tipo; // Tipo del input (text, email, etc.)

      form.append(label); // Agrega el label al form
      label.append(input); // Agrega el input dentro del label
    });

    // Recorre todos los textareas y los agrega al formulario
    this.areas.forEach(({ etiqueta, nombre }) => {
      const label = document.createElement("label"); // Crea el label
      label.innerText = etiqueta; // Texto visible
      const textarea = document.createElement("textarea"); // Crea el textarea
      textarea.name = nombre; // Nombre del textarea
      label.append(textarea); // Inserta el textarea dentro del label
      form.append(label); // Agrega el label al form
    });

    form.append(boton); // Agrega el botón al final del formulario
    document.body.append(form); // Inserta el formulario completo en el body

  }
}

const formulario1 = new Formulario({ accion: "#" });
formulario1.crearCampos({
  etiqueta: "Nombre:",
  nombre: "nombre",
  tipo: "text",
});
formulario1.crearCampos({ etiqueta: "Email:", nombre: "email", tipo: "email" });
formulario1.crearAreas({ etiqueta: "Mensaje:", nombre: "mensaje" });
