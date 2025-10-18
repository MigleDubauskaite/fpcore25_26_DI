const express = require('express');
const app = express();
const port = 3000;


// Configuramos Pug
app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static('public'));


// Ruta principal
app.get('/', (req, res) => {
  res.render('index', { titulo: 'Catalogo de Peliculas', mensaje: 'Lista de peliculas' });
});


// Arrancamos servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});


