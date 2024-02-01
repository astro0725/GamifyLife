const Sequelize = require('sequelize');
const config  = require('./config');

let sequelize;

if (config.production) {
    sequelize = new Sequelize( {
      use_env_variable: config.use_env_variable,
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
