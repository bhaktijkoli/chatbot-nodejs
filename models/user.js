module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    firstname: {type: DataTypes.STRING},
    lastname: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING, unique: true},
    avatar: {type: DataTypes.STRING, defaultValue: ''},
    password: {type: DataTypes.STRING},
    verified: {type: DataTypes.ENUM, values: ['0', '1'], defaultValue: '0'}
  });
  return User;
};
