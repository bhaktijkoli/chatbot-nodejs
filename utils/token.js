const db = require('./../models');
const jwt = require('jsonwebtoken');

module.exports.verifyAuthToken = (token, callback) => {
  if(token) {
    jwt.verify(token, process.env.SECRET_KEY, async function(err, decoded) {
      if(!err) {
        let user = await db.User.findOne({
          where: {
            id: decoded.id,
          }
        });
        if(user) {
          callback(true, user)
          next();
          return;
        }
      }
      callback(false, null);
    });
  } else {
    callback(false, null);
  }
}
