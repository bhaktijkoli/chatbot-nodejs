const db = require('./../models');
const rb = require('./../utils/response-builder');

module.exports =  async (req, res, next) => {
  req.check('company')
  .notEmpty().withMessage('Company name is required.');
  req.check('industry')
  .notEmpty().withMessage('Industry is required.');
  req.check('size')
  .isIn([0,1,2,4,5,6]).withMessage('Company Size is invalid.');
  req.check('audience')
  .isIn([0,1,2]).withMessage('Company Audience is invalid.');

  if(rb.checkErrors(req, res)) return;

  req.data = {
    company: req.body.company,
    industry: req.body.industry,
    size: req.body.size,
    audience: req.body.audience,
  };
  next();
}
