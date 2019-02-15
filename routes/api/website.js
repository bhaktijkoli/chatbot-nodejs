const express = require('express');
const router = express.Router();
const db = require('./../../models');
const randToken = require('rand-token');

const each = require('async/each');

const authMiddleware = require('./../../middlewares/authMiddleware');
const websiteMiddleware = require('./../../middlewares/websiteMiddleware');

const websiteAddRequest = require('./../../requests/websiteAddRequest');
const websiteUpdateBasic = require('./../../requests/websiteUpdateBasic');
const websiteUpdateCompany = require('./../../requests/websiteUpdateCompany');
const websiteUpdatePlan = require('./../../requests/websiteUpdatePlan');
const websiteAddOperator = require('./../../requests/websiteAddOperator');
const rb = require('./../../utils/response-builder');

const Email = require('./../../emails/email');

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
  Email.send(req.body.email, 'operator_invite', {user: req.userOperator, website: req.website, invite: userInvite});
  rb.sendSuccess(res, "Invitation sent")
});

router.post('/remove/operator', [authMiddleware, websiteMiddleware], async (req, res) => {
  let user = null;
  if(req.body.pending == 1) {
    user = await db.UserInvite.findOne({where:{website: req.body.website, email: req.body.email}});
  } else {
    user = await db.UserWebsite.findOne({where:{website: req.body.website, user: req.body.user}});
  }
  if(user) {
    user.destroy();
    rb.sendSuccess(res, "Operator removed");
  } else {
    res.status(404).send("Operator Not Found");
  }
});

router.get('/get/:id', [authMiddleware], async (req, res) => {
  let website = await db.Website.findOne({
    where: {id: req.params.id}
  });
  website = website.dataValues;
  let chatBox = await db.Chatbox.findOne({where: {website: website.id}});
  website.chatbox = chatBox.dataValues;
  let userWebsites = await db.UserWebsite.findAll({where: {website: website.id}});
  website.users = [];
  each(userWebsites,
    async (uw) => {
      let user = await db.User.findOne({where: {id: uw.user}});
      if(user) {
        user = user.dataValues;
        user.role = uw.access;
        website.users.push(user);
      }
    },
    async () => {
      let invites = await db.UserInvite.findAll({where: {website: website.id, type: 'operator'}});
      website.invites = invites;
      res.status(200).json(website);
    }
  );
})


module.exports = router;
