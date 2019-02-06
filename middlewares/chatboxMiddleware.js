const tokenHandler = require('./../utils/token');

module.exports = async (req, res, next) => {
    let xmlRequest = false;
    let token = "";
    if (req.headers['x-requested-with'] == 'XMLHttpRequest') {
        token = req.headers.authtoken;
        xmlRequest = true;
    } else {
        token = req.cookies.authtoken;
        xmlRequest = false;
    }
    tokenHandler.verifyAuthToken(token, (success, user) => {
        if (success) {
            req.user = user;
            next();
        } else {
            if (xmlRequest)
                res.status(401).send("Unauthorized")
            else
                res.redirect('/login')
        }
    })
}