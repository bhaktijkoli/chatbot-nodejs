const tokenHandler = require('./../utils/token');

module.exports = async (req, res, next) => {
  let xmlRequest = false;
  if(req.headers['x-requested-with'] == 'XMLHttpRequest') {
    token = req.headers.authtoken;
    xmlRequest = true;
  } else {
    token = req.cookies.authtoken;
    xmlRequest = false;
  }
  tokenHandler.verifyAuthToken(token, (success, user) => {
    if(success) {
      if(xmlRequest)
      res.status(401).send("Unauthorized")
      else
      res.redirect('/')
    } else {
      next();
    }
  })
}
