const randToken = require('rand-token');

module.exports = (sequelize, DataTypes) => {
  var Website = sequelize.define('Website', {
    name: {type: DataTypes.STRING},
    domain: {type: DataTypes.STRING},
    company: {type: DataTypes.STRING},
    industry: {type: DataTypes.STRING},
    size: {type: DataTypes.ENUM, values: ['0', '1', '2', '3', '4', '5', '6']},
    audience: {type: DataTypes.ENUM, values: ['0', '1', '2']},
    plan: {type: DataTypes.ENUM, values: ['0', '1', '2'], defaultValue: '0'},
    owner: {type: DataTypes.INTEGER},
    active: {type: DataTypes.INTEGER, defaultValue: '-1'},
    key: {type: DataTypes.STRING}
  }, {
    hooks: {
      afterCreate: async (website, options) => {
        do {
          var token = randToken.generate(16);
          web = await website.sequelize.models.Website.findOne({where: {key: token}});
        } while(web!=null)
        website.key = token;
        website.save();
        var chatbox = await website.sequelize.models.Chatbox.create({
          website: website.id,
        })
      }
    }
  });
  return Website;
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
