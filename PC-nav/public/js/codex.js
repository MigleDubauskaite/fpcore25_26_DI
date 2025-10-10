const formulario1 = new Formulario(
    {accion: "Probando crear una instancia de formulario1"}
);


formulario1.crearCampos({
    etiqueta: "Prueba: ",
    nombre: 'hfhg'
});

formulario1.crearAreas({
    nombre: "H"
});

formulario1.render();