const router = require('express').Router();

router.get('/login', authTemplate);
router.get('/signup', authTemplate);

function authTemplate(req, res) {
  res.render('auth', {title:'Welcome to Chatbot'});
}

module.exports = router;
