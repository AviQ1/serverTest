const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../util/database');
const Readers = require('./readers');
class Books extends Model {}
Books.init({
  title: Sequelize.STRING,
  authorFirstName: Sequelize.STRING,
  authorLastName: Sequelize.STRING
}, { sequelize, modelName: 'books' });



module.exports = Books;