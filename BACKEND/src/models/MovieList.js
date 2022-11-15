const { DataTypes } = require("sequelize");

const MovieList = (database) => {
  database.define("MovieList", {
    list_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    favorites: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true
    },
    pending: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true
    }
  },
  {
    timestamps: false
  })
}

module.exports = MovieList;