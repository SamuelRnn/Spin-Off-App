const { User, Password } = require('../database');

const pic_source = 'https://robohash.org/'

const addUser = async (username, email, password) => {
  const user = await User.create({
    username,
    profile_picture: pic_source + username,
    email,
  })
  const { id } = user;
  await Password.create({
    password,
    UserId: id
  })
  return user;
}

module.exports = addUser;