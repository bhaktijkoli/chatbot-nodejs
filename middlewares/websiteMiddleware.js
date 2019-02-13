const db = require('./../models');

module.exports = async (req, res, next) => {
  var id = req.body.website?req.body.website:req.params.id
  if(req.user) {
    let website = await db.Website.findOne({
      where: {
        id: id,
      }
    });
    if(website.owner == req.user.id) {
      next();
      return;
    }
  }
  res.status(401).send("Unauthorized");
}
