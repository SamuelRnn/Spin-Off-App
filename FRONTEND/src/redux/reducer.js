import {
  GET_MATCHING_MOVIES,
  GET_MOVIE_DETAIL,
  FAV_DELETE_MOVIE,
  FAV_ADD_MOVIE,
  SET_SEARCH_TITLE,
  RESET_MATCHING_MOVIES
} from "./actions";

const initialState = {
  movies: [],
  search: '',
  favMovies: [],
  movieDetail: {},
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
  }
};
export default rootReducer;