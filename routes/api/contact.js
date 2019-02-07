const express = require('express');
const router = express.Router();

const db = require('./../../models');

const Email = require('./../../emails/email');

const authMiddleware = require('./../../middlewares/authMiddleware');
const websiteMiddleware  = require('./../../middlewares/websiteMiddleware');

const contactAddRequest = require('./../../requests/contactAddRequest');
const rb = require('./../../utils/response-builder');

router.post('/add', [authMiddleware, websiteMiddleware, contactAddRequest], async (req, res) => {
    res.send('Hello');
});

module.exports = router;