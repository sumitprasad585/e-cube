import { useDispatch, useSelector } from 'react-redux';
import './NearbyEvents.css';
import { useEffect } from 'react';
import { getNearbyEvents } from '../actions/moviesActions';
import Movie from './Movie';
import { useNavigate } from 'react-router-dom';

const NearbyEvents = () => {
  const events = useSelector(state => state.movies.nearbyEvents);
  const { loading, error } = useSelector(state => state.movies);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (events && events.length === 0) 
      dispatch(getNearbyEvents());
  }, [dispatch, events]);

  const handleBack = (e) => {
    navigate('/');
  }

  if (loading) {
    return <h1 className="loading">Loading nearby events...</h1>
  }

  if (!loading && error) {
    return <h1 className="error">{error.name}:{error.message}</h1>
  }

  return (
    <div className="NearbyEvents">
      <header>
        <h1>Nearby Events</h1>
      </header>
      <div className="NearbyEvents-events">
        {
          events && events.length > 0 && 
          events.map(current => {
            return <Movie key={current._id} {...current} />
          })
        }
      </div>
      <div className="NearbyEvents-actions">
        <button onClick={handleBack} className="navigation-button">Go Back</button>
      </div>
    </div>
  );
};

export default NearbyEvents;