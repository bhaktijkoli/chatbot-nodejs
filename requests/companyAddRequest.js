const bcrypt = require('bcrypt');
const db = require('./../models');
const rb = require('./../utils/response-builder');

module.exports =  async (req, res, next) => {
  req.check('name')
  .notEmpty().withMessage('Name is required.');
  req.check('country')
  .notEmpty().withMessage('Country is required.');
  req.check('industry')
  .notEmpty().withMessage('Industry is required.');
  req.check('size')
  .isIn([0,1,2,4,5,6]).withMessage('Company Size is invalid.');
  req.check('audience')
  .isIn([0,1,2]).withMessage('Company Audience is invalid.');

  if(rb.checkErrors(req, res)) return;

  req.data = {
    name: req.body.name,
    country: req.body.country,
    industry: req.body.industry,
    size: req.body.size,
    audience: req.body.audience,
    owner: req.user.id,
  };
  next();
}
