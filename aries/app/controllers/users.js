'use strict';

const User = require('../models/users');

module.exports = {
  getUsers,
  getUsersById,
  createUsers,
  putUsers,
  deleteUsers,
  firstMidGetUsers,
  responseToJSON
};

//middleware la nived de ruta; Doar pe aceasta ruta de get users!!!
function firstMidGetUsers(req, res, next) {
  console.log('First mid from users');
  next();
}

function getUsers(req, res, next) {
  console.log('Here in get users');

  User.find()
    .populate('country', 'name language')
    .exec(function (err, result) {
      if (err) {
        return next(err);
      }

      req.resources.users = result;
      next();
    });
}

function getUsersById(req, res, next) {
  const userId = req.params.userId;

  User.findById({ _id: userId }, function (err, result) {
    if (err) {
      return next(err);
    }

    res.json({ data: result });
  });
}

function createUsers(req, res, next) {
  console.log('This is the user', req.body);
  const user = new User(req.body);

  console.log('Saving user', req.body);

  user.save(function (err, result) {
    if (err) {
      return next(err);
    }

    res.json({ data: result });
  });
}

function putUsers(req, res, next) {
  const userId = req.params.userId;
  const newName = req.body.name;
  const newEmail = req.body.email;

  console.log('Modifying user');

  User.findOneAndUpdate(
    { _id: userId },
    {
      name: newName,
      email: newEmail,
    },
    (err, result) => {
      if (err) {
        next('error');
      }

      res.json({ data: result });
    }
  );
}

function deleteUsers(req, res, next) {
  console.log('Deleting user');

  const userId = req.params.userId;

  User.findOneAndDelete({ _id: userId }, function (err, result) {
    if (err) {
      return next(err);
    }

    res.json('Succesfull delete !');
  });
}

function responseToJSON(prop) {
  return function (req, res, next) {
    res.json(req.resources[prop]);
  };
}
