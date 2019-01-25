const router = require('express').Router();
const guestMiddleware = require('./../middlewares/guestMiddleware');
const authMiddleware = require('./../middlewares/authMiddleware');


router.get('/login', [guestMiddleware], authTemplate);
router.get('/signup', [guestMiddleware], authTemplate);

router.get('/', [authMiddleware], appTemplate);
router.get('/inbox', [authMiddleware], appTemplate);
router.get('/visitors', [authMiddleware], appTemplate);
router.get('/contacts', [authMiddleware], appTemplate);
router.get('/analytics', [authMiddleware], appTemplate);
router.get('/settings', [authMiddleware], appTemplate);
router.get('/settings/*', [authMiddleware], appTemplate);
router.get('/company/add', [authMiddleware], appTemplate);

function authTemplate(req, res) {
  res.render('auth', {title:'Welcome to Chatbot'});
}

function appTemplate(req, res) {
  res.render('app', {title:'Welcome to Chatbot'});
}


module.exports = router;
