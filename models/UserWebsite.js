module.exports = (sequelize, DataTypes) => {
  var UserWebsite = sequelize.define('UserWebsite', {
    user: {type: DataTypes.INTEGER},
    website: {type: DataTypes.INTEGER},
  });

  return UserWebsite;
};
