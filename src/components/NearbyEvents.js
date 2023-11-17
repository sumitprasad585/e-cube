import { useDispatch, useSelector } from 'react-redux';
import './NearbyEvents.css';
import { useEffect } from 'react';
import { getNearbyEvents } from '../actions/moviesActions';
import Movie from './Movie';

const NearbyEvents = () => {
  const events = useSelector(state => state.movies.nearbyEvents);
  const dispatch = useDispatch();

  useEffect(() => {
    if (events && events.length === 0) 
      dispatch(getNearbyEvents());
  }, [dispatch]);

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
    </div>
  );
};

export default NearbyEvents;