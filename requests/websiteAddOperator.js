const db = require('./../models');
const rb = require('./../utils/response-builder');

module.exports =  async (req, res, next) => {
  let userOperator = await db.User.findOne({where:{email: req.body.email}});
  req.check('email')
  .notEmpty().withMessage('Email is required.')
  .custom(val => {return userOperator!=null}).withMessage("User with that email address doesn't exists.");

  if(rb.checkErrors(req, res)) return;

  req.userOperator = userOperator;

  req.data = {
    email: req.body.name,
  };
  next();
}
