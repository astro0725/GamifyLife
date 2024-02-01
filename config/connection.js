require('dotenv').config();
const Sequelize = require('sequelize');
const config = require('./config');

let sequelize;

if (ENV === 'production') {
    sequelize = new Sequelize(process.env[config.use_env_variable], {
        dialect: config.dialect,
    });
} else {
    sequelize = new Sequelize({
      database: config.database,
      username: config.username,
      password: config.password,
      host: config.host,
      dialect: config.dialect,
    });
}

module.exports = sequelize;
