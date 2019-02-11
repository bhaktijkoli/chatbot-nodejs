const express = require('express');
const router = express.Router();
const db = require('./../../models');

const authMiddleware = require('./../../middlewares/authMiddleware');
const websiteMiddleware = require('./../../middlewares/websiteMiddleware');

const websiteAddRequest = require('./../../requests/websiteAddRequest');
const websiteUpdateBasic = require('./../../requests/websiteUpdateBasic');
const websiteUpdateCompany = require('./../../requests/websiteUpdateCompany');
const websiteUpdatePlan = require('./../../requests/websiteUpdatePlan');
const rb = require('./../../utils/response-builder');

router.post('/add', [authMiddleware, websiteAddRequest], async (req, res) => {
  let website = await db.Website.create(req.data);
  let userWebsite = await db.UserWebsite.create({user: req.user.id, website: website.id});
  let reply = {id: website.id, name: website.name, domain: website.domain};
  rb.sendSuccess(res, reply)
});

router.post('/update/basic', [authMiddleware, websiteMiddleware, websiteUpdateBasic], async (req, res) => {
  let website = await db.Website.update(req.data, {
    where: {
      id: req.body.website,
    }
  });
  rb.sendSuccess(res, "Website updated")
});

router.post('/update/company', [authMiddleware, websiteMiddleware, websiteUpdateCompany], async (req, res) => {
  let website = await db.Website.update(req.data, {
    where: {
      id: req.body.website,
    }
  });
  rb.sendSuccess(res, "Website updated")
});

router.post('/update/plan', [authMiddleware, websiteMiddleware, websiteUpdatePlan], async (req, res) => {
  let website = await db.Website.update(req.data, {
    where: {
      id: req.body.website,
    }
  });
  rb.sendSuccess(res, "Website updated")
});
router.get('/get/:id', [authMiddleware], async (req, res) => {
  let website = await db.Website.findOne({
    where: {id: req.params.id}
  });
  website = website.dataValues;
  let chatBox = await db.Chatbox.findOne({website: website.id});
  website.chatbox = chatBox.dataValues;
  res.status(200).json(website);
})


module.exports = router;
