const express = require('express');
const app = express();
const port = 3000;


// Configuramos Pug
app.set('view engine', 'pug');
app.set('views', './views');


// Ruta principal
app.get('/', (req, res) => {
  res.render('index', { titulo: 'Metodología SCRUM', mensaje: 'Preguntas frecuentes sobre Scrum' });
});


// Arrancamos servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
