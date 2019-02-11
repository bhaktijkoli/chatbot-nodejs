const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send("Welcome to API");
})

router.use('/auth', require('./api/auth'));
router.use('/website', require('./api/website'));
router.use('/account', require('./api/account'));
router.use('/chatbox', require('./api/chatbox'));
router.use('/contact', require('./api/contact'));
router.use('/chat', require('./api/chat'));

module.exports = router;
