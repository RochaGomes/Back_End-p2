const { DataTypes } = require('sequelize');
const sequelize = require('./index');
const Ticket = sequelize.define('Ticket', {
  name: DataTypes.STRING,
  price: DataTypes.FLOAT,
  quantity: DataTypes.INTEGER
});
module.exports = Ticket;
