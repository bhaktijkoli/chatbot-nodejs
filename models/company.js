module.exports = (sequelize, DataTypes) => {
  var Company = sequelize.define('Company', {
    name: {type: DataTypes.STRING},
    country: {type: DataTypes.STRING},
    industry: {type: DataTypes.STRING},
    size: {type: DataTypes.ENUM, values: ['0', '1', '2', '3', '4', '5', '6']},
    audience: {type: DataTypes.ENUM, values: ['0', '1', '2']},
    owner: {type: DataTypes.INTEGER},
  });

  return Company;
};

/*
Company size
0, 1-4
1, 5-9
2, 10-49,
3, 50-199,
4, 200-499,
5, 500-999,
6, 1,000+

Audience
0, B2C,
1, B2B,
2, Employees
*/
