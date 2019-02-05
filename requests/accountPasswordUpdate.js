const bcrypt = require('bcrypt');
const db = require('./../models');
const rb = require('./../utils/response-builder');

module.exports = (req, res, next) => {
    req.check('password')
        .notEmpty().withMessage('Password is required.');

    if (rb.checkErrors(req, res)) return;

    req.data = {
        password: req.user.password
    };
    next();
}