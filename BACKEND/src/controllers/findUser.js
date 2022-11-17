const { User, Password } = require("../database");

const findUser = async (username, password) => {
  const user = await User.findOne({
    include: {
      model: Password,
      attributes: ['password']
    },
    where: { username: username }
  }).then(res => JSON.stringify(res));

  const parsedUser = JSON.parse(user);
  if (!parsedUser){
    return {
      status: false,
      message: "User doesn't exist!"
    }
  }
  const fetchedPassword = parsedUser.Password.password
  if(fetchedPassword !== password){
    return {
      status: false,
      message: "Incorrect password."
    }
  }
  return {
    status: true,
    user: parsedUser
  }
};

module.exports = findUser;
