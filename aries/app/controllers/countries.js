'use strict';

const Country = require('../models/countries');

module.exports = {
  firstMidGetCountries,
  getCountries,
  createCountry,
};

function firstMidGetCountries(req, res, next) {
  console.log('First mid from countries');
  next();
}

function getCountries(req, res, next) {
  console.log('Getting countries');

  Country.find(function (err, result) {
    if (err) {
      return next(err);
    }

    req.resources.countries = result;
    next();

  });
}

function createCountry(req, res, next) {
  const country = new Country(req.body);

  country.save(function (err, result) {
    console.log('Saving country');
    if (err) {
      return next(err);
    }

    res.json({ data: result });
  });
}