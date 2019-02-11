const express = require('express');
const router = express.Router();
const db = require('./../../models');
const Email = require('./../../emails/email');
const randToken = require('rand-token');

const authMiddleware = require('./../../middlewares/authMiddleware');
const chatboxMiddleware = require('./../../middlewares/chatboxMiddleware');

const chatboxBasicUpdate = require('./../../requests/chatboxBasicUpdate')

const rb = require('./../../utils/response-builder');

router.post('/update/basic', [authMiddleware, chatboxMiddleware, chatboxBasicUpdate], async (req, res) => {
  let chatbox = await db.Chatbox.update(req.data, {
    where: { id: req.chatbox.id }
  });
  rb.sendSuccess(res, "Chatbot Basic Settings updated")
});

module.exports = router;
