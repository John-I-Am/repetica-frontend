/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/label-has-associated-control */
import './style.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { setUser } from '../../reducers/userReducer';
import { initializeCards } from '../../reducers/cardReducer';
// import { setError } from '../../reducers/errorReducer';

const LoginForm = () => {
  const dispatch = useDispatch();
  const error = useSelector((state: any) => state.error);
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const delayedLogin = () => {
    if (window.localStorage.getItem('currentUser')) {
      setTimeout(() => history.push('/dashboard'), 400);
      setTimeout(() => dispatch(initializeCards()), 200);
    }
  };

  const handleLogin = (event: any) => {
    event.preventDefault();
    dispatch(setUser({
      email,
      password,
    }));

    setTimeout(delayedLogin, 500);

    setEmail('');
    setPassword('');
  };

  return (
    <div id="login-container">
      <div id="header">
        <h1>Login</h1>
        <p>
          Not a member? Signup
          {' '}
          <Link to="/register">here </Link>
        </p>
        <p>Forgotten password? Recover details here</p>
      </div>

      <form onSubmit={handleLogin}>
        <div id="innerForm">

          <div>
            <label htmlFor="email">Email Address</label>
            <input
              className="login-input"
              type="email"
              onChange={({ target }) => setEmail(target.value)}
              id="email"
              value={email}
              placeholder="Email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              className="login-input"
              onChange={({ target }) => setPassword(target.value)}
              id="password"
              type="password"
              value={password}
              placeholder="Password"
            />
          </div>

        </div>
        <button id="login-button" type="submit">Login</button>
        <div id="error">
          {error}
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
