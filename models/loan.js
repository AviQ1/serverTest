const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../util/database');
const Readers = require('./readers');
const Books = require('./book');
class Loans extends Model {}
Loans.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
    loanDate: DataTypes.DATE 
}, { sequelize, modelName: 'loan' });
Readers.belongsToMany(Books, {through: 'loans'});
Books.belongsToMany(Readers, {through: 'loans'});

module.exports = Loans;