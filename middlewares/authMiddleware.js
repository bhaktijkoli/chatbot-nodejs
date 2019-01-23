const tokenHandler = require('./../utils/token');

module.exports = async (req, res, next) => {
  let token = req.headers.authtoken;
  tokenHandler.verifyAuthToken(token, (success, user) => {
    if(success) {
      req.user = user;
      next();
    } else {
      res.status(401).send("Unauthorized")
    }
  })
}
