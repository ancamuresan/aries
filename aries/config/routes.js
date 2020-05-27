'use strict';

//e diferit cum se formeaza pathul in linux si windows
//acest modul ne ajuta sa fie dinamic
const path = require('path');

module.exports.init = initRoutes;

function initRoutes(app) {
  //print current directory
  console.log('__DIRNAME', __dirname);
  const routePath = path.join(__dirname, '../app/routes');
  const routes = ['users','countries'];

  routes.forEach((route) => app.use(require(`${routePath}/${route}`)));
}
