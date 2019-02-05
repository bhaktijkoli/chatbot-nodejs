const express = require('express');
const router = express.Router();
const db = require('./../../models');
const Op = db.Sequelize.Op
const Email = require('./../../emails/email');
const randToken = require('rand-token');

const authMiddleware = require('./../../middlewares/authMiddleware');

const accountBasicUpdate = require('./../../requests/accountBasicUpdate');
const accountEmailUpdate = require('./../../requests/accountEmailUpdate');
const accountPasswordUpdate = require('./../../requests/accountPasswordUpdate');
const rb = require('./../../utils/response-builder');

router.post('/basic/update', [authMiddleware, accountBasicUpdate], async (req, res) => {
    let user = await db.User.update(req.data, {
        where: {
            id: req.user.id,
        }
    });
    rb.sendSuccess(res, "User information updated")
});

router.post('/email/update', [authMiddleware, accountEmailUpdate], async (req, res) => {
    // let user = await db.User.update(req.data, {
    //     where: {
    //         id: req.user.id,
    //     }
    // });


    //Email verification for updation of email
    let ev = await db.EmailVerification.create({
        user: req.user.id,
        email: req.user.email,
        token: randToken.generate(64)
    });
    Email.send(req.user.email, 'email_verification', {
        user: req.user,
        ev: ev,
    });
    rb.sendSuccess(res, "Email updated successfully!")
});

router.post('/password/update', [authMiddleware, accountPasswordUpdate], async (req, res) => {
    let user = await db.User.update(req.data, {
        where: {
            id: req.user.id,
        }
    });
    rb.sendSuccess(res, "Password updated successfully!")
});

module.exports = router;