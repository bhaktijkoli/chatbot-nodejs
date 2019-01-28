module.exports = (sequelize, DataTypes) => {
  var EmailVerification = sequelize.define('EmailVerification', {
    user: {type: DataTypes.INTEGER},
    email: {type: DataTypes.STRING, unique: true},
    token: {type: DataTypes.STRING}
  });

  return EmailVerification;
};
