import { useNavigate } from 'react-router-dom';
import './Movie.css';

const Movie = (props) => {
  const { _id, name, type, rate, imageUrl, allowBooking = false } = props;
  const types = type.split(' ');
  const navigate = useNavigate();
  
  const handleClick = (e) => {
    if (allowBooking)
      navigate(`/movie-details/${_id}`);
  }

  return (
    <div onClick={handleClick} className="Movie">
      <img src={imageUrl} alt={name} />
      <div className="Movie-brief">
        <div className="Movie-brief-container">
          <div className="Movie-brief-left">
            <h1 className="Movie-title">{name}</h1>
            <div className="Movie-type">
              {types && types.length > 0 &&
              types.map((current, index) => {
                return <span key={index}>{current}</span>
              })}
            </div>
          </div>
          <div className="Movie-brief-right">
            <h2 className="Movie-rating">{rate} ★</h2>
          </div>
        </div>
      </div>
      {
        allowBooking &&
        <div className="Movie-actions">
            <button>Book</button>
        </div>
      }
    </div>
  );
};

export default Movie;
