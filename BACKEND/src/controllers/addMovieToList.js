const { User, MovieList } = require('../database')
const findUser = require('./findUser')

const addMovieToList = async (movieId, UserId, listCategorie) => {
  const user = await findUser(UserId);
  const list = await MovieList.findOne({
    where: { UserId }
  })
  if(!list){
    return await MovieList.create({
      [listCategorie]: [movieId],
      UserId
    });
  } else {
    if(!list[listCategorie]){
      list[listCategorie] = [movieId]
    } else {
      list[listCategorie] = [...list[listCategorie], movieId]
    }
    list.save()
    return list
  }
}

module.exports = addMovieToList