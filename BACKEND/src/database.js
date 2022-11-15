process.env.NODE_ENV !== "production" ? require("dotenv").config() : null;
const { Sequelize } = require("sequelize");
const MovieListModel = require("./models/MovieList");
const UserModel = require("./models/User");

const user = process.env.POSTGRES_USER,
  pass = process.env.POSTGRES_PASSWORD,
  db = process.env.DATABASE_NAME;

const database = new Sequelize(
  `postgres://${user}:${pass}@localhost:5432/${db}`,
  {
    logging: false,
  }
);

UserModel(database);
MovieListModel(database);

const { User, MovieList } = database.models;

User.hasOne(MovieList);
MovieList.belongsTo(User);

module.exports = { database, ...database.models };
