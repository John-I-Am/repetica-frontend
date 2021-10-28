/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/label-has-associated-control */
import './style.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { registerUser } from '../../reducers/userReducer';

const SignupForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (event: any) => {
    event.preventDefault();
    dispatch(registerUser({
      name,
      surname,
      email,
      password,
    }));

    setName('');
    setSurname('');
    setEmail('');
    setPassword('');

    // Temporary fix for login not redirecting to homepage due to dispatch not waiting
    setTimeout(() => history.push('/home'), 400);
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
          <div>
            <label htmlFor="name">First Name</label>
            <input
              className="signup-input"
              required
              onChange={({ target }) => setName(target.value)}
              id="name"
              value={name}
              placeholder="name"
            />
          </div>

          <div>
            <label htmlFor="surname">Surname</label>
            <input
              className="signup-input"
              onChange={({ target }) => setSurname(target.value)}
              id="surname"
              value={surname}
              placeholder="surname"
            />
          </div>
          <div>
            <label htmlFor="email">Email Address</label>
            <input
              className="signup-input"
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
              onChange={({ target }) => setPassword(target.value)}
              id="password"
              type="password"
              value={password}
              placeholder="password"
            />
          </div>

        </div>
        <button id="signup-button" type="submit">Signup</button>
      </form>
    </div>
  );
};

export default SignupForm;
