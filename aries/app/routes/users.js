'use strict';

const express = require('express');
//instanta de router pt fiecare fisier
const router = express.Router();
const usersCtrl = require('../controllers/users');
const countriesCtrl = require('../controllers/countries');
const genericCtrl = require('../controllers/generic');

//middleware specific // routes middlewares
router.get('/users', usersCtrl.firstMidGetUsers, usersCtrl.getUsers, genericCtrl.responseToJSON('users') );
router.get('/users/:userId', usersCtrl.getUsersById); //sintaxa e cu 2 pct
router.put('/users/:userId', usersCtrl.putUsers);
router.post('/users', usersCtrl.createUsers);
router.delete('/users/:userId', usersCtrl.deleteUsers);
router.get('/report',usersCtrl.getUsers,countriesCtrl.getCountries, genericCtrl.computeReport('users','countries'), genericCtrl.responseToJSON('report'))

//trebuie tot timpul exportat toata instanta asta de router unde am definit rutele
module.exports = router;
