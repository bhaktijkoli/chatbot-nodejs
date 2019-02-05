const express = require('express');
const router = express.Router();
const db = require('./../../models');

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
    let user = await db.User.update(req.data, {
        where: {
            id: req.user.id,
        }
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