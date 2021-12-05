/* eslint-disable react/jsx-props-no-spreading */
import { Button } from '@mantine/core';

import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { Container, Header, Form } from './styles';
import { setUser } from '../../reducers/userReducer';
import { clearActiveDeck } from '../../reducers/activeDeckReducer';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/dashboard';

  const {
    register: registerLogin,
    handleSubmit: handleSubmitLogin,
    setError: setErrorLogin,
    formState: { errors: errorsLogin },
  } = useForm();

  const handleLogin = async (data: any) => {
    const response: any = await dispatch(setUser(data));
    if (response === 'invalid email or password') {
      setErrorLogin('password', {
        type: 'manual',
        message: 'Incorrect Login',
      });
    }
    if (window.localStorage.getItem('currentUser')) {
      await dispatch(clearActiveDeck());
      navigate(from, { replace: true });
    }
  };

  return (
    <Container>
      <Header>
        <h1>Log In</h1>
        <p>
          Not a member? Signup
          {' '}
          <Link to="/register">here </Link>
        </p>
        <p>Forgotten password? Recover details here</p>
      </Header>

      <Form onSubmit={handleSubmitLogin(handleLogin)}>
        <div>
          <label htmlFor="email">
            Email Address
            <input
              placeholder="email"
              {...registerLogin('email', {
                required: 'required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'invalid email address',
                },
              })}
            />
          </label>

          <p className="error">{errorsLogin.email && errorsLogin.email.message}</p>
        </div>
        <div>
          <label htmlFor="password">
            Password
            <input
              type="password"
              placeholder="Password"
              {...registerLogin('password', {
                required: 'required',
              })}
            />
          </label>
          <p className="error">{errorsLogin.password && errorsLogin.password.message}</p>
        </div>
        <Button id="login-button" type="submit">Login</Button>
      </Form>
    </Container>
  );
};

export default LoginForm;
