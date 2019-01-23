const express = require('express');
const router = express.Router();
const db = require('./../../models');

const authMiddleware = require('./../../middlewares/authMiddleware');

const companyAddRequest = require('./../../requests/companyAddRequest');
const rb = require('./../../utils/response-builder');

router.post('/add', [authMiddleware, companyAddRequest], async (req, res) => {
  let company = await db.Company.create(req.data);
  let userCompany = await db.UserCompany.create({user: req.user.id, company: company.id});
  rb.sendSuccess(res, "Company added successfully!")
});

module.exports = router;
