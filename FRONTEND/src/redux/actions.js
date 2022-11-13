import axios from "axios";

export const GET_MATCHING_MOVIES = "GET_MATCHING_MOVIES";
export const GET_MOVIE_DETAIL = "GET_MOVIE_DETAIL";
export const FAV_DELETE_MOVIE = "FAV_DELETE_MOVIE";
export const FAV_ADD_MOVIE = "FAV_ADD_MOVIE";
export const SET_SEARCH_TITLE = "SET_SEARCH_TITLE";
export const RESET_MATCHING_MOVIES = "RESET_MATCHING_MOVIES";

export const getMatchingMovies = (search) => {
  return function(dispatch){
    // fetch(`http://www.omdbapi.com/?s=${search}&apikey=f2d70180`)
    //   .then(response => response.json())
    //   .then(data => dispatch({
    //     type: GET_MATCHING_MOVIES,
    //     payload: data
    //   }));
    axios.get(`https://www.omdbapi.com/?s=${search}&apikey=f2d70180`)
      .then(res => dispatch({
        type: GET_MATCHING_MOVIES,
        payload: res.data
      }))
  }
}
export const getMovieDetail = (id) => {
  return {
    type: GET_MOVIE_DETAIL,
    payload: id
  }
}
export const favAddMovie = (id) => {
  return {
    type: FAV_ADD_MOVIE,
    payload: id
  }
}
export const favDeleteMovie = (id) => {
  return {
    type: FAV_DELETE_MOVIE,
    payload: id
  }
}
export const setSearchTitle = (title) => {
  return {
    type: SET_SEARCH_TITLE,
    payload: title
  }
}
export const resetMatchingMovies = () => {
  return{
    type: RESET_MATCHING_MOVIES,
  }
}