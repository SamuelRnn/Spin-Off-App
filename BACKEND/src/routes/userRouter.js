const express = require('express');
const controllers = require('../controllers/controllers');
const userRouter = express.Router()
//------------------GET----------------------//
userRouter.get('/', async (req, res) => {
  try {
    const {username, password} = req.query;
    res.header("Access-Control-Allow-Origin", "*");
    res.send(await controllers.findUser(username, password))
  } catch (error) {
    res.status(400).send(error)
  }  
});
//------------------POST----------------------//
userRouter.post('/', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    res.send(await controllers.addUser(username, email, password))
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