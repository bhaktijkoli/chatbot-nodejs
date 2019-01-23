const tokenHandler = require('./../utils/token');

module.exports = async (req, res, next) => {
  let token = req.cookies.authtoken;
  tokenHandler.verifyAuthToken(token, (success, user) => {
    if(success) {
      req.user = user;
      next();
    } else {
      res.redirect('/login');
    }
  })
}
