/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { Button } from '@mantine/core';

import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import {
  Container, Header, Form, FormName,
} from './styles';
import { registerUser } from '../../reducers/userReducer';

const SignupForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setError,
    getValues,
    formState: { errors },
  } = useForm();

  const handleSignup = async (data: any) => {
    const response: any = await dispatch(registerUser(data));
    if (response === 'email not unique') {
      setError('email', {
        type: 'manual',
        message: 'Email unavailable',
      });
    }
    if (window.localStorage.getItem('currentUser')) {
      navigate('/dashboard');
    }
  };

  return (
    <Container>
      <Header>
        <h1>Create Account</h1>
        <p>
          Already registered? Log in
          {' '}
          <Link to="/login">here </Link>
        </p>
      </Header>

      <Form onSubmit={handleSubmit(handleSignup)}>
        <FormName>
          <div>
            <label htmlFor="name">First Name</label>
            <input
              placeholder="Name"
              {...register('name', {
                required: 'required',
                pattern: {
                  value: /^[a-zA-Z]{1,15}$/i,
                  message: 'invalid name / length exceeded',
                },
              })}
            />
            <p className="error">{errors.name && errors.name.message }</p>
          </div>

          <div>
            <label htmlFor="surname">Surname</label>
            <input
              placeholder="Surname"
              {...register('surname', {
                required: 'required',
                pattern: {
                  value: /^[a-zA-Z]{1,15}$/i,
                  message: 'invalid surname / length exceeded',
                },
              })}
            />
            <p className="error">{errors.surname && errors.surname.message}</p>
          </div>
        </FormName>

        <div>
          <label htmlFor="email">Email Address</label>
          <input
            placeholder="Email"
            {...register('email', {
              required: 'required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'invalid email address',
              },
            })}
          />
          <p className="error">
            {errors.email && errors.email.message}
          </p>
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            placeholder="Password"
            type="password"
            {...register('password', {
              required: 'required',
              minLength: {
                value: 8,
                message: 'minimum of 8 characters',
              },
            })}
          />
          <p className="error">{errors.password && errors.password.message}</p>
        </div>

        <div>
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            placeholder="Confirm Password"
            type="password"
            {...register('confirmPassword', {
              required: 'required',
              minLength: {
                value: 8 || 'testing',
                message: 'minimum of 8 characters',
              },
              validate: {
                value: (value) => value === getValues('password') || 'password does not match',
              },
            })}
          />
          <p className="error">{errors.confirmPassword && errors.confirmPassword.message}</p>
        </div>

        <Button type="submit">Sign up</Button>
      </Form>
    </Container>
  );
};

export default SignupForm;
