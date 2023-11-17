import { useDispatch, useSelector } from 'react-redux';
import './NearbyEvents.css';
import { useEffect } from 'react';
import { getNearbyEvents } from '../actions/moviesActions';
import Movie from './Movie';
import { useNavigate } from 'react-router-dom';

const NearbyEvents = () => {
  const events = useSelector(state => state.movies.nearbyEvents);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (events && events.length === 0) 
      dispatch(getNearbyEvents());
  }, [dispatch]);

  const handleBack = (e) => {
    navigate('/');
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