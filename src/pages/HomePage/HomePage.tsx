/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/button-has-type */
import './style.css';
import { useHistory } from 'react-router';

const HomePage = () => {
  const history = useHistory();
  return (
    <div>
      Work in Progress, please jump straight to login / Register Page
      <button onClick={() => history.push('/login')}>Login</button>
      <button onClick={() => history.push('/register')}>Register</button>
    </div>
  );
};

export default HomePage;
