const { Sequelize, DataTypes } = require('sequelize');

// const sequelize = new Sequelize('likes', 'postgres', 'password', {
//   dialect: 'postgres',
//   host: 'localhost',
// });

//fetch the connection string from developement.json
const config = require('../config/development.json');
const sequelize = new Sequelize('likes', 'postgres', 'Test@12345', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false,
});

const User = sequelize.define('User', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = User;
