const router = require('express').Router();

router.get('/', webTemplate);
router.get('/login', webTemplate);

function webTemplate(req, res) {
  res.render('web', {title:'Welcome to Chatbot'});
}

module.exports = router;
