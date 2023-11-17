import { useNavigate, useParams } from 'react-router-dom';
import './MovieDetails.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getMovieDetails } from '../actions/moviesActions';

const MovieDetails = () => {
  const movieDetails = useSelector(state => state.movies.movieDetails);
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getMovieDetails(params.id));
  }, [dispatch]);

  const handleBook = (e) => {
    
  }

  const handleBack = (e) => {
    navigate('/latest-movies');
  }

  if (movieDetails && movieDetails[0]) {
    const movie = movieDetails[0];
    const { _id, name, lanuage, rate, type, imageUrl } = movie;
    return (
      <div className="MovieDetails">
        <div className="MovieDetails-img-container">
          <img src={imageUrl} alt={name} />
        </div>
        <div className="MovieDetails-info-container">
          <div>{name}</div>
          <div>Release Date: 8th Nov 2023</div>
          <div>Duration: 2 Hours 10 mins</div>
          <div>Ratings: <span className="">&nbsp;{rate} ★</span></div>
        </div>
        <div className="MovieDetails-actions">
          <button onClick={handleBook}>Book Now</button>
          <button onClick={handleBack} className="navigation-button">Go Back</button>
        </div>
      </div>
    );
  } else {
    return <h1>Movie Details Not Found</h1>
  }
};

export default MovieDetails;
