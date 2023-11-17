import Navbar from './components/ui/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import LatestMovies from './components/LatestMovies';
import UpcomingMovies from './components/UpcomingMovies';
import NearbyEvents from './components/NearbyEvents';
import MovieDetails from './components/MovieDetails';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/latest-movies" element={<LatestMovies />} />
        <Route path="/upcoming-movies" element={<UpcomingMovies />} />
        <Route path="/nearby-events" element={<NearbyEvents />} />
        <Route path="/movie-details/:id" element={<MovieDetails />} />
      </Routes>
    </div>
  );
}

export default App;
