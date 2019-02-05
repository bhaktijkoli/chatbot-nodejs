const db = require('./../models');
const rb = require('./../utils/response-builder');

module.exports = (req, res, next) => {
    req.check('email')
        .notEmpty().withMessage('Email is required.')
        .custom((val) => {
            return user == null;
        }).withMessage('Email is already registered.')

    if (rb.checkErrors(req, res)) return;

    req.data = {
        email: req.user.email
    };
    next();
}