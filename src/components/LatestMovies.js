import { useDispatch, useSelector } from 'react-redux';
import './LatestMovies.css';
import Movie from './Movie';
import { useEffect } from 'react';
import { getLatestMovies } from '../actions/moviesActions';
import { useNavigate } from 'react-router-dom';

const LatestMovies = () => {
  const movies = useSelector(state => state.movies.latestMovies);
  const { loading, error } = useSelector(state => state.movies);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (movies && movies.length === 0)
      dispatch(getLatestMovies());
  }, [dispatch, movies]);

  const handleBack = (e) => {
    navigate('/');
  }

  return (
    <div className="LatestMovies">
      <header>
        <h1>Latest Movies</h1>
      </header>
      <>
        { loading && <h1 className="loading">Loading latest movies...</h1> }
        { !loading && error && <h1 className="error">{error.name}:{error.message}</h1> }
      </>
      <div className="LatestMovies-movies">
        {
          movies && movies.length > 0 &&
          movies.map((current) => {
            return <Movie key={current._id} {...current} allowBooking />
          })
        }
      </div>
      <div className="LatestMovies-actions">
        <button onClick={handleBack} className="navigation-button">Go Back</button>
      </div>
    </div>
  );
};

export default LatestMovies;
