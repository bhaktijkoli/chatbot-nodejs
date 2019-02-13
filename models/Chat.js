module.exports = (sequelize, DataTypes) => {

  var Chat = sequelize.define('Chat', {
    name: {type: DataTypes.STRING},
    website: {type: DataTypes.INTEGER},
    user: {type: DataTypes.INTEGER},
    visitor_session: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING},
    color: {type: DataTypes.STRING},
  },
  {
    hooks: {
      afterCreate: async (chat, options) => {
        let colors = ['red', 'blue', 'green', 'yellow'];
        chat.color = colors[Math.floor(Math.random() * colors.length-1)];
        chat.save();
      }
    }
  });
  return Chat;
};
