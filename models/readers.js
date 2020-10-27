
const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../util/database');
const Books = require('./Books');

class Readers extends Model {}
Readers.init({
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  phone: Sequelize.STRING,
  phone: Sequelize.email,
}, { sequelize, modelName: 'reader' });


module.exports = Readers;