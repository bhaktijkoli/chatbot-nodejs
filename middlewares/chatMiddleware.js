const tokenHandler = require('./../utils/token');
const db = require('./../models');

module.exports = async (req, res, next) => {
  let website = await db.Website.findOne({where: {key: req.params.key}});
  if(website) {
    let chatbox = await db.Chatbox.findOne({where: {website: website.id}});
    if(chatbox) {
      req.website = website.dataValues;
      req.chatbox = chatbox.dataValues;
      next();
      return;
    }
  }
  res.status(404).send("Not found");
}
