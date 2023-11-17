import './Home.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getLatestMovies, getNearbyEvents, getUpcomingMovies } from '../actions/moviesActions';
import Movie from './Movie';

const Home = (props) => {
  console.log('render');
  const movies = useSelector(state => state.movies);
  const { latestMovies, upcomingMovies } = movies;
  const dispatch = useDispatch();

  useEffect(() => {
    if (latestMovies.length === 0)
      dispatch(getLatestMovies());

    if (upcomingMovies.length === 0)
      dispatch(getUpcomingMovies());

    dispatch(getNearbyEvents());
  }, [dispatch]);

  return (
    <div className="Home">
      <div className="Home-navbar">
        <ul className="Navbar-list">
          <li className="Navbar-list-item"><Link to="/latest-movies">Latest Movies</Link></li>
          <li className="Navbar-list-item"><Link to="/upcoming-movies">Upcoming Movies</Link></li>
          <li className="Navbar-list-item"><Link to="/nearby-events">Nearby Events</Link></li>
        </ul>
      </div>
      <div className="Home-recommended-section">
        <header>
          <h1>Recommended Movies</h1>
        </header>
        <main className="Home-recommended-movies">
          {
            latestMovies && latestMovies.length > 0 && 
            latestMovies.map((current) => {
              return <Movie key={current._id} {...current} allowBooking />
            })
          }
        </main>
      </div>
    </div>
  );
}

export default Home;