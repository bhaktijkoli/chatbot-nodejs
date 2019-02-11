const express = require('express');
const router = express.Router();
const db = require('./../../models');
const uniqid = require('uniqid');

const chatMiddleware = require('./../../middlewares/chatMiddleware')

router.get('/session/get/:key', [chatMiddleware], async (req, res) => {
  var data = {
    chatbox: req.chatbox,
    session: uniqid(),
  }
  res.status(200).json(data);
});

module.exports = router;
