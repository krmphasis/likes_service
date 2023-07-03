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

const Post = sequelize.define('Post', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  likes: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
});

module.exports = Post;