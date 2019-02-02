const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('home', {title:'Welcome to Chatbot'});
});
router.get('/login', (req, res) => {
  res.redirect(req.protocol+"://app." + req.get('host') + "/login")
});
router.get('/signup', (req, res) => {
  res.redirect(req.protocol+"://app." + req.get('host') + "/signup")
});
router.get('/chat', (req, res) => {
  res.render('chat', {title:'Welcome to Chatbot'});
});

function webTemplate(req, res) {
  res.render('web', {title:'Welcome to Chatbot'});
}

module.exports = router;
