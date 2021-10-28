/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/button-has-type */
import './style.css';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { clearCard } from '../../reducers/cardReducer';
import { clearUser } from '../../reducers/userReducer';

const NavBar = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleLogout = () => {
    history.push('/login');
    window.localStorage.removeItem('currentUser');
    dispatch(clearCard());
    dispatch(clearUser());
  };

  return (
    <div id="nav">
      <p>Home</p>
      <p>Trends</p>
      <p>DashBoard</p>
      <p>Decks</p>
      <p>Profile</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default NavBar;
