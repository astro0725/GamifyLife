require('dotenv').config();
const Sequelize = require('sequelize');
const configs = require('./config');

const ENV = process.env.NODE_ENV || 'development';
const config = configs[ENV];

let sequelize;

if (ENV === 'production') {
    sequelize = new Sequelize(process.env[config.use_env_variable], {
        dialect: config.dialect,
    });
} else {
    sequelize = new Sequelize(config.database, config.username, config.password, {
        host: config.host,
        dialect: config.dialect,
    });
}

module.exports = sequelize;
