import movieSearchReducer from "./movieSearch.js";
import movieListReducer from "./movieList.js";
import movieReducer from "./setMovie.js";
import loadingReducer from "./setLoading.js";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  movieSearchReducer,
  movieReducer,
  loadingReducer,
  movieListReducer
});

export default allReducers;
