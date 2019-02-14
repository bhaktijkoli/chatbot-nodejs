module.exports = (sequelize, DataTypes) => {
  var UserInvite = sequelize.define('UserInvite', {
    user: {type: DataTypes.INTEGER},
    website: {type: DataTypes.INTEGER},
    email: {type: DataTypes.STRING},
    type: {type: DataTypes.STRING},
    token: {type: DataTypes.STRING},
  });
  return UserInvite;
};
