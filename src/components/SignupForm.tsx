/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../reducers/userReducer';

const SignupForm = () => {
  const dispatch = useDispatch();
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
  };

  const signupFormStyle = {
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
    <div style={signupFormStyle}>
      <div>
        <h1>Create Account</h1>
        <p>Already registered? Log in here</p>
      </div>

      <form onSubmit={handleSignup} style={formStyle}>
        <div style={innerForm}>
          <div>
            <label htmlFor="name">First Name</label>
            <input
              onChange={({ target }) => setName(target.value)}
              style={inputStyle}
              id="name"
              value={name}
              placeholder="name"
            />
          </div>

          <div>
            <label htmlFor="surname">Surname</label>
            <input
              onChange={({ target }) => setSurname(target.value)}
              style={inputStyle}
              id="surname"
              value={surname}
              placeholder="surname"
            />
          </div>
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
        <button style={buttonStyle} id="signup-button" type="submit">Signup</button>
      </form>
    </div>
  );
};

export default SignupForm;
