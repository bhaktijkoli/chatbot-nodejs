const bcrypt = require('bcrypt');
const db = require('./../models');
const rb = require('./../utils/response-builder');

module.exports = (req, res, next) => {
  req.check('password')
  .notEmpty().withMessage('Password is required.');
  req.check('password_confirm')
  .notEmpty().withMessage('Password confirmation is required.')
  .custom(val => {
    return val == req.body.password;
  }).withMessage("Password doesn't match")

  if (rb.checkErrors(req, res)) return;

  var salt = bcrypt.genSaltSync(10);
  var password = bcrypt.hashSync(req.body.password, salt);

  req.data = {
    password: password
  };
  next();
}
