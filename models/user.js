module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    firstname: {type: DataTypes.STRING},
    lastname: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
  });

  return User;
};
