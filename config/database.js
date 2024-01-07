const { Sequelize } = require('sequelize');
const { error } = require('console');
module.exports = new Sequelize('codegig', 'postgres', '130802', {
    host: 'localhost',
    dialect: 'postgres'
  });