const express = require('express');
const router = express.Router();
const db = require('./../../models');
const uniqid = require('uniqid');
const geoip = require('geoip-lite');
const publicIp = require('public-ip');

const chatMiddleware = require('./../../middlewares/chatMiddleware')

const Visitor = require('./../../mongo/visitor')

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

module.exports = router;
