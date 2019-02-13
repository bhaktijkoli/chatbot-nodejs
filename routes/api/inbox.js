const express = require('express');
const router = express.Router();

const db = require('./../../models');

const authMiddleware = require('./../../middlewares/authMiddleware');
const websiteMiddleware = require('./../../middlewares/websiteMiddleware');

const each = require('async/each');

const VisitorMessage = require('./../../mongo/visitor_message');

const rb = require('./../../utils/response-builder');

router.get('/get/:id', [authMiddleware, websiteMiddleware], async (req, res) => {
  let inboxes = await db.Inbox.findAll({where:{website: req.params.id}});
  let inboxesData = [];
  each(inboxes,
    async (inbox) => {
      var data = inbox.dataValues;
      var lastMessage = await VisitorMessage.findOne({session: data.visitor_session}).sort({createdAt: -1});
      data.lastMessage = lastMessage;
      inboxesData.push(data);
    },
    () => {
      res.status(200).json(inboxesData);
    }
  );
});

module.exports = router;
