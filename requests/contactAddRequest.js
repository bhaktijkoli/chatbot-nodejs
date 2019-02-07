const db = require('../models');
const rb = require('../utils/response-builder');

module.exports = async (req, res, next) => {
    req.check('fullname')
        .notEmpty().withMessage('fullname is required.');
    req.check('email')
        .notEmpty().withMessage('Email is required.');

    if (rb.checkErrors(req, res)) return;

    req.data = {
        fullname: req.body.fullname,
        email: req.body.email,
        website: req.body.website,
    };
    next();
}