const express = require('express');
const controllers = require('../controllers/controllers');
const userRouter = express.Router()
//------------------GET----------------------//
userRouter.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    res.send(await controllers.findUser(id))
  } catch (error) {
    res.status(400).send(error.message)
  }  
});
//------------------POST----------------------//
userRouter.post('/', async (req, res) => {
  try {
    const { username } = req.body;
    res.send(await controllers.addUser(username))
  } catch (error) {
    res.status(400).send(error.message)
  }
});
userRouter.post('/:id/addToList', async (req, res) => {
  try {
    const { id } = req.params
    const {movieId, listCategorie} = req.body
    res.send(await controllers.addMovieToList(movieId, id, listCategorie))
  } catch (error) {
    res.status(400).send(error.message)
  }
})
//---------------------------------------------
module.exports = userRouter