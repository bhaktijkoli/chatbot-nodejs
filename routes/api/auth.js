const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('./../../models');

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
          res.status(200).send("OK");
      });
      return;
    }
  }
  res.status(400).send("Bad request");
})

module.exports = router;
