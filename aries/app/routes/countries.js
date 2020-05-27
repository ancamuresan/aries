'use strict';

const express = require('express');
const router = express.Router();
const countriesCtrl = require('../controllers/countries');
const genericCtrl = require('../controllers/generic');


router.get('/countries', countriesCtrl.firstMidGetCountries, countriesCtrl.getCountries, genericCtrl.responseToJSON('countries'));
router.post('/countries', countriesCtrl.createCountry);

module.exports=router;