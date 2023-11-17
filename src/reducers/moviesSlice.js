import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  latestMovies: [],
  upcomingMovies: [],
  nearbyEvents: [],
  movieDetails: [],
  searchFilter: '',
  loading: false,
  error: null
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    getLatestMoviesSuccess: (state, action) => {
      state.latestMovies = action.payload;
      state.loading = false;
    },
    getUpcomingMoviesSuccess: (state, action) => {
      state.upcomingMovies = action.payload;
      state.loading = false;
    },
    getNearbyEventsSuccess: (state, action) => {
      state.nearbyEvents = action.payload;
      state.loading = false;
    },
    getMovieDetailsSuccess: (state, action) => {
      state.movieDetails = action.payload;
      state.loading = false;
    },
    updateSearchFilter: (state, action) => {
      state.searchFilter = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    }
  }
});

export const {
  getLatestMoviesSuccess,
  getUpcomingMoviesSuccess,
  getNearbyEventsSuccess,
  getMovieDetailsSuccess,
  updateSearchFilter,
  setLoading,
  setError,
} = moviesSlice.actions;

export default moviesSlice.reducer;
