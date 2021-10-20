import { configureStore } from '@reduxjs/toolkit';
import MoviesReducer from './moviesActions'

export default configureStore({
  reducer: {
    Movies: MoviesReducer,
  },
});