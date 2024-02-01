require('dotenv').config();

const ENV = process.env.NODE_ENV || 'development';

const config = {
  development: {
    database: process.env.DB_DEV_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  },
  test: {
    database: process.env.DB_TEST_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  },
  production: {
    use_env_variable: process.env.JAWSDB_URL,
    dialect: process.env.DB_DIALECT,
  },
};

module.exports = config[ENV];
