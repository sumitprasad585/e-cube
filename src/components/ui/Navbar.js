import './Navbar.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateSearchFilter } from './../../reducers/moviesSlice';

const Navbar = () => {
  const searchFilter = useSelector(state => state.movies.searchFilter);
  console.log(searchFilter);
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    dispatch(updateSearchFilter(e.target.value));
  }

  return (
    <div className="Navbar">
      <div className="Navbar-container">
        <div className="Navbar-left">
          <div className="Navbar-brand">
            <Link to="/">E-Cube</Link>
          </div>
        </div>
        <div className="Navbar-right">
          <form className="Navbar-search">
            <input type="text" value={searchFilter} onChange={handleFilterChange} placeholder="Search" />
          </form>
        </div>
      </div>
    </div>
  )
};

export default Navbar;
