const db = require('./../models');
const rb = require('./../utils/response-builder');

module.exports = async (req, res, next) => {
    req.check('firstname')
        .notEmpty().withMessage('First Name is required.');
    req.check('lastname')
        .notEmpty().withMessage('Last Name is required.');

    if (rb.checkErrors(req, res)) return;

    req.data = {
        firstname: req.body.firstname,
        lastname: req.body.lastname
    };
    next();
}