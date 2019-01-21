const express = require('express');
const router = express.Router();
const db = require('./../../models');

const authRegisterRequest = require('./../../requests/authRegisterRequest');
const rb = require('./../../utils/response-builder');

router.post('/register', [authRegisterRequest], async (req, res) => {
  let user = await db.User.create(req.data);
  rb.sendSuccess(res, "Registartion Successfull")
})

module.exports = router;
