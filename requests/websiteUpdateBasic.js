const db = require('./../models');
const rb = require('./../utils/response-builder');

module.exports =  async (req, res, next) => {
  req.check('name')
  .notEmpty().withMessage('Website name is required.');
  req.check('domain')
  .notEmpty().withMessage('Website domain is required.');

  if(rb.checkErrors(req, res)) return;

  req.data = {
    name: req.body.name,
    domain: req.body.domain,
  };
  next();
}
