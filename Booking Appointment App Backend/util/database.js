const Sequelize = require('sequelize');

const sequelize = new Sequelize('booking_app', 'root', 'AUDUMBAR', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;