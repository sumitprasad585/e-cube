import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import moviesReducer from './../reducers/moviesSlice';

const rootReducer = {
  movies: moviesReducer
}

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunkMiddleware, logger)
});

export default store;
