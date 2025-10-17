const express = require('express');
const app = express();
const port = 3000;

// 👇 Esto sirve los archivos estáticos desde la carpeta "public"
app.use(express.static("public"));

// Configuramos Pug
app.set('view engine', 'pug');
app.set('views', './views');

// Ruta principal
app.get('/', (req, res) => {
  res.render('index', { 
    titulo: 'Acordeón', 
    mensaje: 'Preguntas frecuentes sobre Scrum', 
    pagina: "Inicio"
  });
});

// Arrancamos servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});