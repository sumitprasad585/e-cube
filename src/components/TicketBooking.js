import './TicketBooking.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';

const TicketBooking = () => {
  const [date, setDate] = useState('');
  const [timing, setTiming] = useState('');
  const [seats, setSeats] = useState('');
  const [showError, setShowError] = useState(false);
  const [error, setError] = useState(null);
  const timingSlots = ['9:30AM', '12:30PM', '3:30PM', '6:30PM', '9:30PM'];
  const seatOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const params = useParams();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (date === '') {
      setError(prev => new Error('Please select the date!'));
      setShowError(prev => true);
      setTimeout(() => setShowError(false), 3000);
      return;
    }

    if (timing === '') {
      setError(prev => new Error('Please select the time slot!'));
      setShowError(prev => true);
      setTimeout(() => setShowError(false), 3000);
      return;
    }

    if (seats === '') {
      setError(prev => new Error('Please select the seats!'));
      setShowError(prev => true);
      setTimeout(() => setShowError(false), 3000);
      return;
    }


    const selectedDate = new Date(date);
    const currentDate = new Date();
    if (selectedDate < currentDate) {
      setError(prev => new Error('Please select a future date!'));
      setShowError(prev => true);
      setTimeout(() => setShowError(false), 3000);
      return;
    }
    
    navigate(`/final-booking/${params.id}`);
  }

  const handleBack = (e) => {
    navigate(`/movie-details/${params.id}`);
  }

  return (
    <div className="TicketBooking">
      {error && showError && <div className="form-errors">{error.message}</div>}
      <form onSubmit={handleSubmit} className="TicketBooking-form">
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input type="date" name="date" id="date" onChange={e => setDate(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="timing">Choose Time</label>
          <select name="timing" id="timing" value={timing} onChange={e => setTiming(e.target.value)}>
            <option value=""></option>
            {
              timingSlots.map((current) => {
                return <option key={current} value={current}>{current}</option>
              })
            }
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="seats">Select Seats</label>
          <select name="seats" id="seats" value={seats} onChange={e => setSeats(e.target.value)}>
            <option value=""></option>
            {
              seatOptions.map(current => {
                return <option key={current} value={current}>{current}</option>
              })
            }
          </select>
        </div>
        <div className="form-group form-actions">
          <button type="submit">Book</button>
          <button type="button" onClick={handleBack} className="navigation-button">Go Back</button>
        </div>
      </form>
    </div>
  );
};

export default TicketBooking;
