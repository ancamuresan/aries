'use strict';

const express = require('express');
const app = express();

const config = require('./config'); // by default se uita pe index.js

//Avem trei tipuri de middlewareuri , app/routes/thirdparties
//ORDINEA E IMPORTANTA ! PRIMA DATA EXPRESS PT CA ROUTES FOLOSESTE EXPRESS

require('./config/express').init(app);
//ii dam access la toate rutele
require('./config/routes').init(app);
//initializam baza de date
require('./config/mongoose').init(app);

//middleware generic pt toate rutele, se apeleaza daca se ajugnge prin next()
//sau daca spre exemplu nu este definita o ruta
app.all('*', function (req, res, next) {
  console.log('Last middleware !!!');
  res.status(404).json({
    status: 'fail',
    message: `The requeste url is not found : ${req.url}`,
  });
});

//middleware de erori generice ex: crapam ceva la DB si vrem sa aruncam eroare
app.use(function (err, req, res, next) {
console.log('In error middleware ');

  return res.status(404).json({
    status: 'error',
    message: err.message,
  });
});

app.listen(config.PORT, function () {
  console.log(`API on port ${config.PORT} `);
});
