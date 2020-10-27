
const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../util/database');
const Books = require('./book');

class Readers extends Model {}
Readers.init({
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  phone: Sequelize.STRING,
  email: Sequelize.STRING
}, { sequelize, modelName: 'readers' });



module.exports = Readers;