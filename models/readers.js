
const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../util/database');
//const Books = require('./book');

class Readers extends Model {}
Readers.init({
  firstName: DataTypes.STRING,
  lastName: DataTypes.STRING,
  phone: DataTypes.STRING,
  email: DataTypes.STRING
}, { sequelize, modelName: 'readers' });



module.exports = Readers;