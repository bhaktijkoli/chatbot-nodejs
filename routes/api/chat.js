const express = require('express');
const router = express.Router();
const db = require('./../../models');
const uniqid = require('uniqid');
const geoip = require('geoip-lite');
const publicIp = require('public-ip');

const authMiddleware = require('./../../middlewares/authMiddleware');
const websiteMiddleware = require('./../../middlewares/websiteMiddleware');
const chatMiddleware = require('./../../middlewares/chatMiddleware')

const Visitor = require('./../../mongo/visitor')
const VisitorMessage = require('./../../mongo/visitor_message');

const rb = require('./../../utils/response-builder');

const each = require('async/each');

router.get('/session/get/:key', [chatMiddleware], async (req, res) => {
  let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  let session = uniqid();
  if(ip == '::ffff:127.0.0.1') {
    ip = await publicIp.v4();
  }
  var geo = await geoip.lookup(ip);
  let visitor = Visitor.create({
    website: req.website.id,
    session: session,
    country: geo.country,
    city: geo.city,
    region: geo.region,
    timezone: geo.timezone,
    browser: req.useragent.browser,
    browser_version: req.useragent.version,
    os: req.useragent.os,
    platform: req.useragent.platform,
    mobile: req.useragent.isMobile,
    desktop: req.useragent.isDesktop,
    platform: req.useragent.platform,
    coords: {lat: geo.ll[0], lon: geo.ll[1]},
  });
  var data = {
    chatbox: req.chatbox,
    session: session,
  }
  res.status(200).json(data);
});

router.get('/get/:id', [authMiddleware, websiteMiddleware], async (req, res) => {
  let inboxes = await db.Chat.findAll({where:{website: req.params.id}});
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

router.get('/get/details/:id', [authMiddleware], async(req, res) => {
  let chat = await db.Chat.findOne({where: {id: req.params.id}});
  let chatData = chat.dataValues;
  chatData.messages = await VisitorMessage.find({session: chat.visitor_session});
  chatData.visitor = await Visitor.findOne({session: chat.visitor_session});
  res.status(200).json(chatData)
})

module.exports = router;
