/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/button-has-type */
import { useHistory } from 'react-router';

const HomePage = () => {
  const history = useHistory();

  const handleLogout = () => {
    history.push('/login');
    window.localStorage.removeItem('currentUser');
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default HomePage;
