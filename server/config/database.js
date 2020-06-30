const Sequelize = require('sequelize'); // Sequelize es un ORM de DB
require('dotenv').config({ path: 'variables.env' });

module.exports = new Sequelize(process.env.BD_NAME, process.env.BD_USER, process.env.BD_PASS, {
  host: process.env.BD_HOST,
  port: process.env.BD_PORT,
  dialect: 'mysql',
  define: {
    timestamps: false
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  operatorsAliases: 1
});

console.log('servidor de la muerte: ', process.env.BD_HOST, ' el puerto de la misma: ', process.env.BD_PORT, 'pass: ', process.env.BD_PASS);