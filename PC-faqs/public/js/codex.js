const faqs = [
  {
    pregunta: "Quien mató a kenedy.",
    respuesta: "Nadie lo sabe.",
  },
  {
    pregunta: "De qué color es el caballo blanco de Santiago.",
    respuesta: "Eso es una de las grandes incógnitas de la humanidad.",
  },
];

class Acordeon {
  constructor({ contenedor = "#container" } = {}) {
    this.contenedor = contenedor;
    this.render();
  }

  render() {
    faqs.map((faq, index) => {
      const pregunta = document.createElement("h2");
      const respuesta = document.createElement("h3");

      pregunta.innerText = faq.pregunta;
      respuesta.innerText = faq.respuesta;
      console.log(faq.pregunta);
      const contenedor = document.querySelector(this.contenedor);
      contenedor.append(pregunta);
      contenedor.append(respuesta);
    });
  }
}

new Acordeon();
