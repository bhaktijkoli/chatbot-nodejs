const db = require('./../models');
const rb = require('./../utils/response-builder');

module.exports =  async (req, res, next) => {
  req.check('email')
  .notEmpty().withMessage('Email is required.');

  if(rb.checkErrors(req, res)) return;

  req.data = {
    email: req.body.name,
  };
  next();
}
