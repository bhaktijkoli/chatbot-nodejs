const express = require('express');
const router = express.Router();
const db = require('./../../models');

const authMiddleware = require('./../../middlewares/authMiddleware');

const companyAddRequest = require('./../../requests/websiteAddRequest');
const rb = require('./../../utils/response-builder');

router.post('/add', [authMiddleware, websiteAddRequest], async (req, res) => {
  let website = await db.Website.create(req.data);
  let userWebsite = await db.UserWebsite.create({user: req.user.id, website: website.id});
  rb.sendSuccess(res, "Website added successfully!")
});

module.exports = router;
