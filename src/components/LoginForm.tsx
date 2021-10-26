/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { setUser } from '../reducers/userReducer';

const LoginForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event: any) => {
    event.preventDefault();
    dispatch(setUser({
      email,
      password,
    }));

    setEmail('');
    setPassword('');

    // Temporary fix for login not redirecting to homepage due to dispatch not waiting
    setTimeout(() => history.push('/home'), 400);
  };

  const loginFormStyle = {
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
    height: '500px',
    width: '450px',
    marginTop: '10%',
    borderRadius: '30px',
    background: 'white',
    boxShadow: '0px 3px 15px rgba(0,0,0,0.2)',
  };

  const formStyle = {
    display: 'flex',
    height: '100%',
    width: '80%',
    paddingLeft: '50px',
    flexDirection: 'column' as 'column',
    justifyContent: 'space-evenly',
  };

  const inputStyle = {
    height: '40px',
    width: '80%',
    borderRadius: '30px',
    border: 'none',
    background: 'WhiteSmoke',
    paddingLeft: '20px',
  };

  const innerForm = {
    display: 'flex',
    flexDirection: 'column' as 'column',
    gap: '20px',
  };

  const buttonStyle = {
    height: '40px',
    width: '87%',
    fontSize: '16px',
    borderRadius: '30px',
    border: 'none',
    background: 'orange',
  };

  return (
    <div style={loginFormStyle}>
      <div>
        <h1>Login</h1>
        <p>
          Not a member? signup
          {' '}
          <Link to="/register">here </Link>
        </p>
        <p>Forgotten password? Recover details here</p>
      </div>

      <form onSubmit={handleLogin} style={formStyle}>
        <div style={innerForm}>

          <div>
            <label htmlFor="email">Email Address</label>
            <input
              onChange={({ target }) => setEmail(target.value)}
              style={inputStyle}
              id="email"
              value={email}
              placeholder="Email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              onChange={({ target }) => setPassword(target.value)}
              style={inputStyle}
              id="password"
              type="password"
              value={password}
              placeholder="password"
            />
          </div>

        </div>
        <button style={buttonStyle} id="signup-button" type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
