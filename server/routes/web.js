const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('web', {title:'Welcome to Chatbot'});
});

module.exports = router;
