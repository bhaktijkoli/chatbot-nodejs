const router = require('express').Router();
const guestMiddleware = require('./../middlewares/guestMiddleware');
const authMiddleware = require('./../middlewares/authMiddleware');


router.get('/', [authMiddleware], (req, res) => {
  res.redirect('/company/add');
});
router.get('/login', [guestMiddleware], authTemplate);
router.get('/signup', [guestMiddleware], authTemplate);
router.get('/company/add', [authMiddleware], appTemplate);

function authTemplate(req, res) {
  res.render('auth', {title:'Welcome to Chatbot'});
}

function appTemplate(req, res) {
  res.render('app', {title:'Welcome to Chatbot'});
}


module.exports = router;
