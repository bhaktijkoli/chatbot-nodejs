module.exports = (sequelize, DataTypes) => {
    var Contact = sequelize.define('Contact', {
        fullname: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        website: {
            type: DataTypes.INTEGER
        },
    });
    return Contact;
};