const db = require('./../models');

module.exports = async (req, res, next) => {
  if(req.user) {
    let website = await db.Website.findOne({
      where: {
        id: req.body.website,
      }
    });
    if(website.owner == req.user.id) {
      next();
      return;
    }
  }
  res.status(401).send("Unauthorized");
}
