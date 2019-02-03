module.exports = (sequelize, DataTypes) => {

  var Chatbox = sequelize.define('Chatbox', {
    website: {type: DataTypes.INTEGER},
    color: {type: DataTypes.STRING, defaultValue: '#00a8ff'},
    title: {type: DataTypes.STRING, defaultValue: 'Questions? chat with us!'},
    welcome_message: {type: DataTypes.STRING, defaultValue: 'Welcome to chat bot!'},
  });
  return Chatbox;
};
