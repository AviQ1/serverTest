const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../util/database');
//const Readers = require('./readers');
class Books extends Model {}
Books.init({
  title: DataTypes.STRING,
  authorFirstName: DataTypes.STRING,
  authorLastName: DataTypes.STRING,
  rate: DataTypes.INTEGER
}, { sequelize, modelName: 'books' });



module.exports = Books;