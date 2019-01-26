const bcrypt = require('bcrypt');
const db = require('./../models');
const rb = require('./../utils/response-builder');

module.exports =  async (req, res, next) => {
  req.check('plan')
  .isIn([0,1,2]).withMessage('Plan is invalid.');

  if(rb.checkErrors(req, res)) return;

  req.data = {
    plan: req.body.plan,
    active: '1',
  };
  next();
}
