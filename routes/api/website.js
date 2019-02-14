const express = require('express');
const router = express.Router();
const db = require('./../../models');
const randToken = require('rand-token');

const authMiddleware = require('./../../middlewares/authMiddleware');
const websiteMiddleware = require('./../../middlewares/websiteMiddleware');

const websiteAddRequest = require('./../../requests/websiteAddRequest');
const websiteUpdateBasic = require('./../../requests/websiteUpdateBasic');
const websiteUpdateCompany = require('./../../requests/websiteUpdateCompany');
const websiteUpdatePlan = require('./../../requests/websiteUpdatePlan');
const websiteAddOperator = require('./../../requests/websiteAddOperator');
const rb = require('./../../utils/response-builder');

router.post('/add', [authMiddleware, websiteAddRequest], async (req, res) => {
  let website = await db.Website.create(req.data);
  let userWebsite = await db.UserWebsite.create({user: req.user.id, website: website.id, access: '1'});
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

router.post('/add/operator', [authMiddleware, websiteMiddleware, websiteAddOperator], async (req, res) => {
  let userInvite = await db.UserInvite.create({
    user: req.user.id,
    website: req.website.id,
    email: req.body.email,
    type: 'operator',
    token: randToken.generate(64),
  });
  rb.sendSuccess(res, "Invitation sent")
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
