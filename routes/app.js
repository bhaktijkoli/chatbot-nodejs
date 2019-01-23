const router = require('express').Router();
const guestWebMiddleware = require('./../middlewares/guestWebMiddleware');
const authWebMiddleware = require('./../middlewares/authWebMiddleware');


router.get('/', [authWebMiddleware], (req, res) => {
  res.redirect('/company/add');
});
router.get('/login', [guestWebMiddleware], authTemplate);
router.get('/signup', [guestWebMiddleware], authTemplate);
router.get('/company/add', [authWebMiddleware], appTemplate);

function authTemplate(req, res) {
  res.render('auth', {title:'Welcome to Chatbot'});
}

function appTemplate(req, res) {
  res.render('app', {title:'Welcome to Chatbot'});
}


module.exports = router;
