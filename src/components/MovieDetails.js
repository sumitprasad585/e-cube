import { useNavigate, useParams } from 'react-router-dom';
import './MovieDetails.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getMovieDetails } from '../actions/moviesActions';

const MovieDetails = () => {
  const movieDetails = useSelector(state => state.movies.movieDetails);
  const { loading, error } = useSelector(state => state.movies);
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getMovieDetails(params.id));
  }, [dispatch, params]);

  const handleBook = (movie) => {
    navigate(`/ticket-booking/${params.id}`, { state: {movie}});
  }

  const handleBack = (e) => {
    navigate('/latest-movies');
  }

  if (loading) {
    return <h1 className="loading">Loading movie details....</h1>
  }

  if (!loading && error) {
    return <h1 className="error">{error.name}:{error.message}</h1>
  }

  if (movieDetails && movieDetails[0]) {
    const movie = movieDetails[0];
    const { name, rate, imageUrl } = movie;
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
          <button onClick={e => handleBook(movie)}>Book Now</button>
          <button onClick={handleBack} className="navigation-button">Go Back</button>
        </div>
      </div>
    );
  } else {
    return <h1>Movie Details Not Found</h1>
  }
};

export default MovieDetails;
