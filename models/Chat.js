module.exports = (sequelize, DataTypes) => {

  var Chat = sequelize.define('Chat', {
    name: {type: DataTypes.STRING},
    website: {type: DataTypes.INTEGER},
    user: {type: DataTypes.INTEGER},
    visitor_session: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING},
  });
  return Chat;
};
