const express = require('express');
const router = express.Router();

const db = require('./../../models');

const authMiddleware = require('./../../middlewares/authMiddleware');
const websiteMiddleware = require('./../../middlewares/websiteMiddleware');

const each = require('async/each');

const VisitorMessage = require('./../../mongo/visitor_message');

const rb = require('./../../utils/response-builder');



module.exports = router;
