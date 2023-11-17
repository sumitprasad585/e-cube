import { useDispatch, useSelector } from 'react-redux';
import './LatestMovies.css';
import Movie from './Movie';
import { useEffect } from 'react';
import { getLatestMovies } from '../actions/moviesActions';

const LatestMovies = () => {
  const movies = useSelector(state => state.movies.latestMovies);
  const dispatch = useDispatch();

  useEffect(() => {
    if (movies && movies.length === 0)
      dispatch(getLatestMovies());
  }, [dispatch]);

  return (
    <div className="LatestMovies">
      <header>
        <h1>Latest Movies</h1>
      </header>
      <div className="LatestMovies-movies">
        {
          movies && movies.length > 0 &&
          movies.map((current) => {
            return <Movie key={current._id} {...current} allowBooking />
          })
        }
      </div>
    </div>
  );
};

export default LatestMovies;
