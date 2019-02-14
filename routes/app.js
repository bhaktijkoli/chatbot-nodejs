const router = require('express').Router();
const guestMiddleware = require('./../middlewares/guestMiddleware');
const authMiddleware = require('./../middlewares/authMiddleware');
const db = require('../models');


router.get('/login', [guestMiddleware], authTemplate);
router.get('/signup', [guestMiddleware], authTemplate);

router.get('/', [authMiddleware], appTemplate);
router.get('/inbox', [authMiddleware], appTemplate);
router.get('/messages', [authMiddleware], appTemplate);
router.get('/messages/*', [authMiddleware], appTemplate);
router.get('/visitors', [authMiddleware], appTemplate);
router.get('/contacts', [authMiddleware], appTemplate);
router.get('/analytics', [authMiddleware], appTemplate);
router.get('/settings', [authMiddleware], appTemplate);
router.get('/settings/*', [authMiddleware], appTemplate);
router.get('/websites/*', [authMiddleware], appTemplate);
router.get('/company/add', [authMiddleware], appTemplate);
router.get('/verification', async (req, res)=>{
  let ev = await db.EmailVerification.findOne({
    where: {
      token: req.query.token,
    }
  });
  if(ev){
    let user = await db.User.update(
      {verified: '1', email: ev.email},
      {where: {id: ev.user}}
    );
    ev.destroy();
    res.send('Verification Successful!');
  }
  else{
    res.send('Verification Failed!');
  }
});

router.get('/invite', async (req, res)=>{
  let invite = await db.UserInvite.findOne({where:{token:req.query.token}});
  if(invite.type == "operator") {
    let user = await db.User.findOne({where:{email: invite.email}});
    if(user) {
      let userWebsite = await db.UserWebsite.create({
        user: user.id,
        website: invite.website,
        access: '2',
      });
      res.redirect('/');
      return;
    }
  }
  res.status(404).send("Token Expired.")
})

function authTemplate(req, res) {
  res.render('auth', {title:'Welcome to Chatbot'});
}

function appTemplate(req, res) {
  res.render('app', {title:'Welcome to Chatbot'});
}


module.exports = router;
