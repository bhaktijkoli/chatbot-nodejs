const db = require('./../models');
const rb = require('./../utils/response-builder');

module.exports = (req, res, next) => {
    req.check('firstname')
        .notEmpty().withMessage('First Name is required.');
    req.check('lastname')
        .notEmpty().withMessage('Last Name is required.');

    if (rb.checkErrors(req, res)) return;

    req.data = {
        firstname: req.user.firstname,
        lastname: req.user.lastname
    };
    next();
}