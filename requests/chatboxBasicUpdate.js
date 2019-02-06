const db = require('./../models');
const rb = require('./../utils/response-builder');

module.exports = (req, res, next) => {
  req.check('color')
  .notEmpty().withMessage('Color is required.');
  req.check('title')
  .notEmpty().withMessage('Title is required.');
  req.check('welcome_message')
  .notEmpty().withMessage('Welcome message is required.');

  if (rb.checkErrors(req, res)) return;

  req.data = {
    color: req.body.color,
    title: req.body.title,
    welcome_message: req.body.welcome_message
  };
  
  next();
}
