import axios from 'axios';
import { getLatestMoviesSuccess, getMovieDetailsSuccess, getNearbyEventsSuccess, getUpcomingMoviesSuccess, setError, setLoading } from '../reducers/moviesSlice';

export const getLatestMovies = () => {
  return async (dispatch, getState) => {
    const apiUrl = 'http://3.17.216.66:4000/latest'
    try {
      dispatch(setLoading(true));
      const response = await axios.get(apiUrl);
      const data = response.data;
      dispatch(getLatestMoviesSuccess(data));
    } catch (err) {
      dispatch(setError(err));
    }
  };
};

export const getUpcomingMovies = () => {
  return async (dispatch, getState) => {
    const apiUrl = 'http://3.17.216.66:4000/upcomingMovies'
    try {
      dispatch(setLoading(true));
      const response = await axios.get(apiUrl);
      const data = response.data;
      dispatch(getUpcomingMoviesSuccess(data));
    } catch (err) {
      dispatch(setError(err));
    }
  };
};

export const getNearbyEvents = () => {
  return async (dispatch, getState) => {
    const apiUrl = 'http://3.17.216.66:4000/events';
    try {
      dispatch(setLoading(true));
      const response = await axios.get(apiUrl);
      const data = response.data;
      dispatch(getNearbyEventsSuccess(data));
    } catch (err) {
      dispatch(setError(err));
    }
  };
};

export const getMovieDetails = (movieId) => {
  return async (dispatch, getState) => {
    const apiUrl = 'http://3.17.216.66:4000/latest/' + movieId;
    try {
      dispatch(setLoading(true));
      const response = await axios.get(apiUrl);
      const data = response.data;
      dispatch(getMovieDetailsSuccess(data));
    } catch (err) {
      dispatch(setError(err));
    }
  };
};
