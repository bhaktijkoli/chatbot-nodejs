module.exports = (sequelize, DataTypes) => {
  var UserWebsite = sequelize.define('UserWebsite', {
    user: {type: DataTypes.INTEGER},
    website: {type: DataTypes.INTEGER},
    access: {type: DataTypes.ENUM, values: ['0', '1', '2'], defaultValue: '0'}
  });
  return UserWebsite;
};
