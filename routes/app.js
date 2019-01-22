const router = require('express').Router();

router.get('/', appTemplate);

function appTemplate(req, res) {
  res.send("Hello")
  // res.render('web', {title:'Welcome to Chatbot'});
}

module.exports = router;
