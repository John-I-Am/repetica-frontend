/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/button-has-type */
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { clearCard } from '../reducers/cardReducer';
import { clearUser } from '../reducers/userReducer';

const NavBar = () => {
  const navBarStyle = {
    height: '100%',
    width: '80px',
    background: 'white',
    boxShadow: '0px 3px 15px rgba(0,0,0,0.2)',
    position: 'fixed' as 'fixed',
    top: '0',
    left: '0',
    padding: '20px',
  };

  const history = useHistory();
  const dispatch = useDispatch();

  const handleLogout = () => {
    history.push('/login');
    window.localStorage.removeItem('currentUser');
    dispatch(clearCard());
    dispatch(clearUser());
  };

  return (
    <div style={navBarStyle}>
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
