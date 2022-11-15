const { User } = require("../database");

const findUser = async (id) => {
  const user = await User.findByPk(id);

  if (!user) throw new Error("El usuario no existe!");
  return user;
};

module.exports = findUser;
