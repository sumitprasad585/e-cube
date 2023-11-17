import { useLocation, useNavigate } from 'react-router-dom';
import './FinalBooking.css';
import qrCode from './../assets/qr_code.png';

const FinalBooking = () => {
  const { state } = useLocation();
  const { movie, date, timing, seats } = state;
  const dateObj = new Date(date);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  const formattedDate = `${dateObj.getDate()} ${months[dateObj.getMonth()]} ${dateObj.getFullYear()}`;
  
  const navigate = useNavigate();

  console.log(state);
  const handleBack = (e) => {
    navigate('/');
  }

  return (
    <div className="FinalBooking">
      <div className="FinalBooking-message">
        <h2>Congratulations! Ticket booked successfully</h2>
      </div>
      <div className="FinalBooking-qr-container">
        <img src={qrCode} alt="QR code" />
      </div>
      <div className="FinalBooking-info-container">
        <div>{movie.name} ({movie.language})</div>
        <div>{formattedDate}</div>
        <div>{timing}</div>
        <div>{seats} Seats</div>
      </div>
      <div className="FinalBooking-actions">
        <button className="navigation-button" onClick={handleBack}>Back to the Home page</button>
      </div>
    </div>
  );
};

export default FinalBooking;
