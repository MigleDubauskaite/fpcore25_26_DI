/* 
📝 Ejercicio 3 – Formulario simple

Enunciado:
Crea una clase MiFormulario que permita:

Añadir campos input (nombre, email) y textareas (mensaje).

Renderizar un formulario con un botón que diga “Enviar”.

Mostrar el formulario en el body.
*/

class MiFormulario {
  constructor(boton = "Enviar") {
    this.campos = [];
    this.areas = [];
    this.boton = boton;
  }

  crearCampo(nombre, tipo, etiqueta) {
    this.campos.push({ nombre, tipo, etiqueta });
  }

  crearArea(nombre, etiqueta) {
    this.areas.push({ nombre, etiqueta });
  }

  render() {
    const form = document.createElement("form");

    this.campos.forEach((c) => {
      const label = document.createElement("label");
      label.innerText = c.etiqueta;

      const input = document.createElement("input");
      input.name = c.nombre;
      input.type = c.tipo;

      label.append(input);
      form.append(label);
    });

    this.areas.forEach((a) => {
      const label = document.createElement("label");
      label.innerText = a.etiqueta;

      const textarea = document.createElement("textarea");
      textarea.name = a.nombre;

      label.append(textarea);
      form.append(label);
    });

    const btn = document.createElement("button");
    btn.innerText = this.boton;
    
    form.append(btn);
    document.body.append(form);
  }
}

const form = new MiFormulario();
form.crearCampo("nombre", "text", "Nombre:");
form.crearCampo("email", "email", "Correo:");
form.crearArea("mensaje", "Mensaje:");
form.render();
