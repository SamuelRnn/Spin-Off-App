const { User } = require('../database');

const pic_source = 'https://robohash.org/'

const addUser = async (username) => {
  const user = await User.create({
    username,
    profile_picture: pic_source + username
  })
  return user;
}

module.exports = addUser;