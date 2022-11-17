import axios from "axios";

export const GET_MATCHING_MOVIES = "GET_MATCHING_MOVIES";
export const GET_MOVIE_DETAIL = "GET_MOVIE_DETAIL";
export const FAV_DELETE_MOVIE = "FAV_DELETE_MOVIE";
export const FAV_ADD_MOVIE = "FAV_ADD_MOVIE";
export const SET_SEARCH_TITLE = "SET_SEARCH_TITLE";
export const RESET_MATCHING_MOVIES = "RESET_MATCHING_MOVIES";
export const GET_RAND_QUOTE = "GET_RAND_QUOTE";

const API_KEY = import.meta.env.VITE_API_KEY;

export const getMatchingMovies = (search) => {
  return function (dispatch) {
    axios
      .get(`https://www.omdbapi.com/?s=${search}&apikey=${API_KEY}`)
      .then((res) =>
        dispatch({
          type: GET_MATCHING_MOVIES,
          payload: res.data,
        })
      );
  };
};
export const getMovieDetail = (id) => {
  return {
    type: GET_MOVIE_DETAIL,
    payload: id,
  };
};
export const favAddMovie = (id) => {
  return {
    type: FAV_ADD_MOVIE,
    payload: id,
  };
};
export const favDeleteMovie = (id) => {
  return {
    type: FAV_DELETE_MOVIE,
    payload: id,
  };
};
export const setSearchTitle = (title) => {
  return {
    type: SET_SEARCH_TITLE,
    payload: title,
  };
};
export const resetMatchingMovies = () => {
  return {
    type: RESET_MATCHING_MOVIES,
  };
};
export const getRandQuote = (arg) => {
  if(arg){
    return {
      type: GET_RAND_QUOTE,
      payload: false,
    }
  }
  return function (dispatch) {
    setTimeout(()=>{
      axios.get("https://movie-quote-api.herokuapp.com/v1/quote/").then((res) =>
        dispatch({
          type: GET_RAND_QUOTE,
          payload: res.data,
        })
      )
    },1600)
  };
};
