const express = require('express');
const router = express.Router();
const multer  = require('multer')
const path = require('path');
const uniqid = require('uniqid');
const db = require('./../../models');
const Op = db.Sequelize.Op
const Email = require('./../../emails/email');
const randToken = require('rand-token');

const authMiddleware = require('./../../middlewares/authMiddleware');

const accountBasicUpdate = require('./../../requests/accountBasicUpdate');
const accountEmailUpdate = require('./../../requests/accountEmailUpdate');
const accountPasswordUpdate = require('./../../requests/accountPasswordUpdate');
const rb = require('./../../utils/response-builder');

router.post('/basic/update', [authMiddleware, accountBasicUpdate], async (req, res) => {
    let user = await db.User.update(req.data, {
        where: {
            id: req.user.id,
        }
    });
    rb.sendSuccess(res, "User information updated")
});

router.post('/email/update', [authMiddleware, accountEmailUpdate], async (req, res) => {
    let ev = await db.EmailVerification.create({
        user: req.user.id,
        email: req.body.email,
        token: randToken.generate(64)
    });
    Email.send(req.user.email, 'email_verification', {
        user: req.user,
        ev: ev,
    });
    rb.sendSuccess(res, "Email updated successfully!")
});

router.post('/password/update', [authMiddleware, accountPasswordUpdate], async (req, res) => {
    let user = await db.User.update(req.data, {
        where: {
            id: req.user.id,
        }
    });
    rb.sendSuccess(res, "Password updated successfully!")
});

var storageAvatar = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(req.app.locals.publicpath, 'public', 'avatars'))
  },
  filename: function (req, file, cb) {
    req.filename = uniqid() + '.png';
    cb(null, req.filename)
  }
})

var uploadAvatar = multer({ storage: storageAvatar }).single('avatar');

router.post('/avatar/update', [authMiddleware], async (req, res) => {
  uploadAvatar(req, res, async (err) => {
    if (err instanceof multer.MulterError) {
      console.log(err);
    } else if (err) {
      console.log(err);
    } else {
      req.data = {
        avatar: req.filename,
      }
      let user = await db.User.update(req.data, {
        where: {id: req.user.id}
      });
      rb.sendSuccess(res, "Avatar Updated.");
    }
  });
});

module.exports = router;
