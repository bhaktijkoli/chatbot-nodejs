module.exports.checkErrors = (req, res) => {
  const errors = req.validationErrors();
  if (errors) {
    let data = {};
    errors.forEach(el=> {
      data[el.param] = el.msg;
    });
    this.sendErrors(res, data);
    return true;
  }
  return false;
}

module.exports.sendErrors = (res, errors) => {
  var reply = {
    success: false,
    messages: errors
  }
  res.send(reply);
};

module.exports.sendSuccess = (res, message) => {
  var reply = {
    success: true,
    message: message
  }
  res.send(reply);
};
