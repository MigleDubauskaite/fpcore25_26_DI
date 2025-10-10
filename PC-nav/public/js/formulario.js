class Formulario {
  constructor({ accion, metodo = "GET", boton = "Enviar" }) {
    this.accion = accion;
    this.metodo = metodo;
    this.boton = boton;
    this.campos = [];
    this.areas = [];
  }

  crearCampos({ nombre, tipo, etiqueta }) {
    this.campos.push({ nombre, tipo, etiqueta });
  }

  crearAreas({ nombre, etiqueta }) {
    this.areas.push({ nombre, etiqueta });
  }

  render() {
    const form = document.createElement("form");
    const boton = document.createElement("button");

    boton.classList.add('btn');
    boton.innerText = this.boton;

    form.setAttribute("action", this.accion);
    form.setAttribute("method", this.metodo);

    boton.innerText = this.boton;

    this.campos.forEach(({ etiqueta, nombre, tipo }) => {
      const label = document.createElement("label");
      const input = document.createElement("input");

      label.innerText = etiqueta;

      input.name = nombre;
      input.type = tipo;
      form.append(label);
      label.append(input);
    });

    this.areas.forEach(({ etiqueta, nombre }) => {
      const label = document.createElement("label");
      label.innerText = etiqueta;
      const textarea = document.createElement("textarea");
      textarea.name = nombre;
      label.append(textarea);
      form.append(label);
    });

    form.append(boton);
    document.body.append(form);

    console.log("prueba");
  }
}
