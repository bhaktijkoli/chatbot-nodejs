const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('./../../models');

const each = require('async/each');

const authMiddleware = require('./../../middlewares/authMiddleware');

const authRegisterRequest = require('./../../requests/authRegisterRequest');
const rb = require('./../../utils/response-builder');

router.post('/register', [authRegisterRequest], async (req, res) => {
  let user = await db.User.create(req.data);
  rb.sendSuccess(res, "Registartion Successfull")
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
  res.status(200).json(user);
});

module.exports = router;
