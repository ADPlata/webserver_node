const express = require('express');
require('dotenv').config();

const app = express();
//const port = process.env.PORT_APPLICATION;
const port = process.env.PORT


// Handlebars
app.set('view engine', 'hbs');
const hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/partials');

//Servir contenido estatico
app.use(express.static('public/templated-roadtrip'));

app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'David Plata',
    titulo: 'Curso de Node'
  });
})

app.get('/generic', (req, res) => {
  res.render('generic');
})

app.get('/elements', (req, res) => {
  res.render('elements');
})

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})