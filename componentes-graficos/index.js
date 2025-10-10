const express = require('express');
const app = express();
const port = 3000;


// Configuramos Pug
app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static('public'));


// Ruta principal
app.get('/', (req, res) => {
  res.render('index', { titulo: 'Hola Mundo', mensaje: 'Bienvenido a Express + Pug' });
});


// Arrancamos servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});


