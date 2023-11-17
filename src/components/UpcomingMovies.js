import { useDispatch, useSelector } from 'react-redux';
import './UpcomingMovies.css';
import Movie from './Movie';
import { useEffect } from 'react';
import { getUpcomingMovies } from '../actions/moviesActions';
import { useNavigate } from 'react-router-dom';

const UpcomingMovies = () => {
  const movies = useSelector(state => state.movies.upcomingMovies);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (movies && movies.length === 0)
      dispatch(getUpcomingMovies());
  }, [dispatch]);

  const handleBack = (e) => {
    navigate('/');
  }

  return (
    <div className="UpcomingMovies">
      <header>
        <h1>Upcoming Movies</h1>
      </header>
      <div className="UpcomingMovies-movies">
        {
          movies && movies.length > 0 && 
          movies.map(current => {
            return <Movie key={current._id} {...current} />
          })
        }
      </div>
      <div className="UpcomingMovies-actions">
        <button onClick={handleBack} className="navigation-button">Go Back</button>
      </div>
    </div>
  );
}

export default UpcomingMovies;