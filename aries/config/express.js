'use strict';

const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const dateHelper = require('../helpers/date');

module.exports.init = initExpress;

function initExpress(app) {
  //third party middlewares 

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(methodOverride());

  //aici intra tot timpul , indiferent de ruta

  app.use(function (req, res, next) {
    console.log(`API call from express ${dateHelper.formattedDate()}`);
    req.resources = req.resources || {};
    next();
  });
}
