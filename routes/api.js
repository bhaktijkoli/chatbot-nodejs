const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send("Welcome to API");
})

router.use('/auth', require('./api/auth'));
router.use('/website', require('./api/website'));
router.use('/account', require('./api/account'));

module.exports = router;
