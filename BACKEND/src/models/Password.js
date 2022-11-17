const {DataTypes} = require('sequelize');

const Password = (database) => {
  database.define('Password',{
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    timestamps: false
  })
}

module.exports = Password