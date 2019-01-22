const bcrypt = require('bcrypt');
const db = require('./../models');
const rb = require('./../utils/response-builder');

module.exports =  async (req, res, next) => {
  let user = await db.User.findOne({
    where: {
      email: req.body.email
    },
    attributes: ['email']
  });

  req.check('firstname')
  .notEmpty().withMessage('Firstname is required.');
  req.check('lastname')
  .notEmpty().withMessage('Lastname is required.');
  req.check('email')
  .notEmpty().withMessage('Email is required.')
  .custom((val) => {
    return user == null;
  }).withMessage('Email is already registered.')
  req.check('password')
  .notEmpty().withMessage('Password is required.');

  if(rb.checkErrors(req, res)) return;

  var salt = bcrypt.genSaltSync(10);
  var password = bcrypt.hashSync(req.body.password, salt);

  req.data = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: password,
  };
  next();
}
