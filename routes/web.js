const router = require('express').Router();

router.get('/', webTemplate);
router.get('/login', webTemplate);
router.get('/signup', webTemplate);

function webTemplate(req, res) {
  res.render('web', {title:'Welcome to Chatbot'});
}

module.exports = router;
