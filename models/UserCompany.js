module.exports = (sequelize, DataTypes) => {
  var UserCompany = sequelize.define('UserCompany', {
    user: {type: DataTypes.INTEGER},
    company: {type: DataTypes.INTEGER},
  });

  return UserCompany;
};
