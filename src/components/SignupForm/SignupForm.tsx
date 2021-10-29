/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/label-has-associated-control */
import './style.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { registerUser } from '../../reducers/userReducer';
import { setError } from '../../reducers/errorReducer';

const SignupForm = () => {
  const dispatch = useDispatch();
  const error = useSelector((state: any) => state.error);
  const history = useHistory();
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const delayedLogin = () => {
    if (window.localStorage.getItem('currentUser')) {
      setTimeout(() => history.push('/home'), 400);
    }
  };

  const handleSignup = (event: any) => {
    event.preventDefault();

    if (password === confirmPassword) {
      dispatch(registerUser({
        name,
        surname,
        email,
        password,
      }));

      setTimeout(delayedLogin, 500);
    } else {
      setPassword('');
      setConfirmPassword('');
      dispatch(setError('Passwords do not match'));
      setInterval(() => dispatch(setError('')), 4000);
    }
  };

  return (
    <div id="signup-container">
      <div id="header">
        <h1>Create Account</h1>
        <p>
          Already registered? Log in
          {' '}
          <Link to="/login">here </Link>
        </p>
      </div>

      <form onSubmit={handleSignup}>
        <div id="innerForm">

          <div id="name-input">
            <div>
              <label htmlFor="name">First Name</label>
              <input
                className="signup-input"
                required
                onChange={({ target }) => setName(target.value)}
                id="name"
                value={name}
                placeholder="Name"
              />
            </div>

            <div>
              <label htmlFor="surname">Surname</label>
              <input
                className="signup-input"
                required
                onChange={({ target }) => setSurname(target.value)}
                id="surname"
                value={surname}
                placeholder="Surname"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email">Email Address</label>
            <input
              className="signup-input"
              required
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
              className="signup-input"
              required
              minLength={8}
              onChange={({ target }) => setPassword(target.value)}
              id="password"
              type="password"
              value={password}
              placeholder="Password"
            />
          </div>

          <div>
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              className="signup-input"
              required
              minLength={8}
              onChange={({ target }) => setConfirmPassword(target.value)}
              id="confirm-password"
              type="password"
              value={confirmPassword}
              placeholder="Confirm Password"
            />
          </div>
        </div>
        <button id="signup-button" type="submit">Sign up</button>
        <div id="error">
          {error}
        </div>
      </form>

    </div>
  );
};

export default SignupForm;
