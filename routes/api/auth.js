const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('./../../models');
const Op = db.Sequelize.Op
const Email = require('./../../emails/email');
const randToken = require('rand-token');

const each = require('async/each');

const authMiddleware = require('./../../middlewares/authMiddleware');

const authRegisterRequest = require('./../../requests/authRegisterRequest');
const rb = require('./../../utils/response-builder');

router.post('/register', [authRegisterRequest], async (req, res) => {
  let user = await db.User.create(req.data);
  let ev = await db.EmailVerification.create({
    user: user.id,
    email: user.email,
    token: randToken.generate(64)
  });
  Email.send(user.email, 'email_verification', {user: user, ev: ev});
  rb.sendSuccess(res, "Registartion Successfull");
})

router.post('/login', async (req, res) => {
  let user = await db.User.findOne({
    where: {
      email: req.body.email
    }
  });
  if(user) {
    if(bcrypt.compareSync(req.body.password, user.password)) {
      jwt.sign({id:user.id}, process.env.SECRET_KEY, (err, token)=> {
        let reply = {
          success: true,
          token: token,
        }
        res.status(200).json(reply);
      });
      return;
    }
  }
  res.status(400).send("Bad request");
})

router.get('/get', [authMiddleware], async (req, res) => {
  var user = req.user.dataValues;
  var userWebsites = await db.UserWebsite.find({
    where: { user: user.id }
  });
  user.websites = [];
  console.log("HEllo");
  each(userWebsites,
    async (userWebsite, callback) => {
      var website = await db.Website.findOne({
        where: {id: userWebsite.id},
        attributes: ['name', 'domain']
      });
      console.log(website.dataValues);
      user.websites.push(website);
      callback();
    },
    () => {
      res.status(200).json(user);
    }
  );
});

module.exports = router;
