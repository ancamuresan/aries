'use strict';
const mongoose = require('mongoose');
const config = require('../config');

module.exports.init = initMongoose;
function initMongoose(app) {

  console.log('initing mongoose');
  mongoose.connect(config.mongodb.uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });


  console.log('mongo-uri', config.mongodb.uri);
  // const db = mongoose.connection;
  // db.on('error', console.error.bind(console, 'connection error:'));
  // db.once('open', function() {
  //
  // we're connected!
  // console.log('connected') // });
  // If the Node process ends, cleanup existing connections
  process.on('SIGINT', cleanup);
  process.on('SIGTERM', cleanup);
  process.on('SIGHUP', cleanup);
}

function cleanup() {
  mongoose.connection.close(function () {
    process.exit();
  });
}
