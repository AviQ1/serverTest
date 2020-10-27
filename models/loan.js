const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../util/database');
const Readers = require('./readers');
const Books = require('./book');
const Loans = sequelize.define('loans', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
    loanDate: DataTypes.DATE 
}, );
Readers.belongsToMany(Books, {through: 'loans'});
Books.belongsToMany(Readers, {through: 'loans'});
Books.hasMany(Loans);
Readers.hasMany(Loans);
Loans.belongsTo(Books);
Loans.belongsTo(Readers);
module.exports = Loans;