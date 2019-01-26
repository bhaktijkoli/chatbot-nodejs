const bcrypt = require('bcrypt');
const db = require('./../models');
const rb = require('./../utils/response-builder');

module.exports =  async (req, res, next) => {
  req.check('name')
  .notEmpty().withMessage('Name is required.');
  req.check('domain')
  .notEmpty().withMessage('Industry is required.');

  if(rb.checkErrors(req, res)) return;

  req.data = {
    name: req.body.name,
    domain: req.body.domain,
    owner: req.user.id,
  };
  next();
}
