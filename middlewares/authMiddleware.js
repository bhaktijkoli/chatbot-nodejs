const tokenHandler = require('./../utils/token');

module.exports = async (req, res, next) => {
  let token = "";
  if(req.headers['x-requested-with'] == 'XMLHttpRequest') {
    token = req.headers.authtoken;
  } else {
    token = req.cookies.authtoken;
  }
  tokenHandler.verifyAuthToken(token, (success, user) => {
    if(success) {
      req.user = user;
      next();
    } else {
      res.status(401).send("Unauthorized")
    }
  })
}
