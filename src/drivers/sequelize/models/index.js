const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');

const basename = path.basename(module.filename);
const db = {};

const connection = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST || '127.0.0.1',
    dialect: process.env.DB_DIALECT,
    logging: process.env.DB_DEBUG === 'true',
    benchmark: false,
    pool: {
      max: 10,
      min: 0,
      idle: 10000,
    },
    port: process.env.DB_PORT,
  },
);

const files = fs
  .readdirSync(__dirname)
  .filter(
    (file) => file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js',
  );
if (files.length > 0) {
  files.forEach((file) => {
    const model = connection.import(path.join(__dirname, file));
    db[model.name] = model;
  });
}

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = connection;
db.Sequelize = Sequelize;

module.exports = db;
