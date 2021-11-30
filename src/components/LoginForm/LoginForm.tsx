/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { Button } from '@mantine/core';

import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { Container, Header, Form } from './styles';
import { setUser } from '../../reducers/userReducer';

const LoginForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();

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
      history.push('/dashboard');
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
          <label htmlFor="email">Email Address</label>
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
          <p className="error">{errorsLogin.email && errorsLogin.email.message}</p>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            {...registerLogin('password', {
              required: 'required',
            })}
          />
          <p className="error">{errorsLogin.password && errorsLogin.password.message}</p>
        </div>
        <Button id="login-button" type="submit">Login</Button>
      </Form>
    </Container>
  );
};

export default LoginForm;
