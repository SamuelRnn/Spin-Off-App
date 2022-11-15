import {
  GET_MATCHING_MOVIES,
  GET_MOVIE_DETAIL,
  FAV_DELETE_MOVIE,
  FAV_ADD_MOVIE,
  SET_SEARCH_TITLE,
  RESET_MATCHING_MOVIES,
  GET_RAND_QUOTE
} from "./actions";

const initialState = {
  movies: [],
  search: '',
  favMovies: [],
  movieDetail: {},
  randQuote: ''
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return { ...state };
    case GET_MATCHING_MOVIES:
      return { ...state, movies: action.payload};
    case SET_SEARCH_TITLE:
      return { ...state, search: `"${action.payload}"`}
    case RESET_MATCHING_MOVIES:
      return { ...state, movies: []}
    case GET_RAND_QUOTE:
      return { ...state, randQuote: action.payload}
  }
};
export default rootReducer;