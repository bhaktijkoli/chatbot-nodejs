const tokenHandler = require('./../utils/token');
const db = require('./../models');

module.exports = async (req, res, next) => {
  let chatbox = await db.Chatbox.findOne({
    where: {id: req.body.chatbox}
  });
  if(!chatbox) {
    res.status(404).send("Chatbox not found.");
  }
  let userWebsite = await db.UserWebsite.findOne({
    where: {website: chatbox.website, user: req.user.id}
  });
  if(userWebsite) {
    req.chatbox = chatbox.dataValues;
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
}
