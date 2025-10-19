// Clase para crear formularios dinámicamente
class Formulario {
  // Constructor recibe acción del form, método (GET/POST) y texto del botón
  constructor({ accion, metodo = "GET", boton = "Enviar" }) {
    this.accion = accion;   // URL de destino
    this.metodo = metodo;   // Método HTTP
    this.boton = boton;     // Texto del botón
    this.campos = [];       // Array para inputs
    this.areas = [];        // Array para textarea
  }

  // Método para añadir campos input
  crearCampos({ nombre, tipo, etiqueta }) {
    this.campos.push({ nombre, tipo, etiqueta });
  }

  // Método para añadir áreas de texto
  crearAreas({ nombre, etiqueta }) {
    this.areas.push({ nombre, etiqueta });
  }

  // Renderiza el formulario en el body
  render() {
    const form = document.createElement("form");
    const boton = document.createElement("button");

    // Clase para botón, simple
    boton.classList.add("btn");
    boton.innerText = this.boton;

    // Añadimos atributos al form
    form.setAttribute("action", this.accion);
    form.setAttribute("method", this.metodo);

    // Creamos los inputs
    this.campos.forEach(({ etiqueta, nombre, tipo }) => {
      const label = document.createElement("label");
      const input = document.createElement("input");

      label.innerText = etiqueta;  // Texto visible
      input.name = nombre;         // Nombre del input
      input.type = tipo;           // Tipo de input
      form.append(label);          // Añadimos label al form
      label.append(input);         // Input dentro del label
    });

    // Creamos las áreas de texto
    this.areas.forEach(({ etiqueta, nombre }) => {
      const label = document.createElement("label");
      label.innerText = etiqueta;
      const textarea = document.createElement("textarea");
      textarea.name = nombre;
      label.append(textarea);
      form.append(label);
    });

    // Añadimos el botón al form
    form.append(boton);

    // Insertamos el form en el body
    document.body.append(form);

    console.log("Formulario generado");
  }
}

// EJEMPLO DE USO
const miFormulario = new Formulario({ accion: "/submit", metodo: "POST", boton: "Enviar Datos" });
miFormulario.crearCampos({ nombre: "nombre", tipo: "text", etiqueta: "Nombre:" });
miFormulario.crearCampos({ nombre: "email", tipo: "email", etiqueta: "Correo:" });
miFormulario.crearAreas({ nombre: "mensaje", etiqueta: "Mensaje:" });
miFormulario.render();
