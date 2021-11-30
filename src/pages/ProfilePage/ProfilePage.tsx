/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useForm } from 'react-hook-form';
import { Button, Switch } from '@mantine/core';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNotifications } from '@mantine/notifications';
import {
  Container, Header, Main, Section, Form, SectionHeader,
} from './styles';
import SideBar from '../../components/SideBar/SideBar';
import { setFromLocal, updateUser } from '../../reducers/userReducer';

const ProfilePage = () => {
  const dispatch = useDispatch();
  const notifications = useNotifications();
  const user = useSelector((state: any) => state.user);

  const {
    register: registerName,
    handleSubmit: handleSubmitName,
    formState: { errors: errorsName },
  } = useForm();

  const {
    register: registerEmail,
    handleSubmit: handleSubmitEmail,
    setError,
    formState: { errors: errorsEmail },
  } = useForm();

  const {
    register: registerPassword,
    handleSubmit: handleSubmitPassword,
    getValues: getValuesPassword,
    setError: setErrorPassword,
    formState: { errors: errorsPassword },
  } = useForm();

  const onSubmitName = async (data: any) => {
    await dispatch(updateUser(data));
    notifications.showNotification({ title: 'Success', message: 'Name updated successfully', color: 'green' });
  };

  const onSubmitPassword = async (data: any) => {
    const response: any = await dispatch(updateUser(data));
    if (response === 'Incorrect Password') {
      setErrorPassword('currentPassword', {
        type: 'manual',
        message: 'Incorrect Password',
      });
      notifications.showNotification({ title: 'Error', message: 'Error updating password', color: 'red' });
    } else {
      notifications.showNotification({ title: 'Success', message: 'Password updated successfully', color: 'green' });
    }
  };

  const onSubmitEmail = async (data: any) => {
    const response: any = await dispatch(updateUser(data));
    if (response === 'email not unique') {
      setError('email', {
        type: 'manual',
        message: 'Email unavailable',
      });
      notifications.showNotification({ title: 'Error', message: 'Error updating email', color: 'red' });
    } else {
      notifications.showNotification({ title: 'Success', message: 'Email updated successfully', color: 'green' });
    }
  };

  const onSubmitRadio = async (data: any) => {
    console.log('radio clicked', data);
  };

  useEffect(() => {
    dispatch(setFromLocal());
  }, []);

  return (
    <Container>
      <Header>
        <h1>
          {`${user === null ? 'null' : user.name} ${user === null ? 'null' : user.surname}`}
        </h1>
      </Header>
      <Main>
        <Section>
          <SectionHeader>
            <h2>Name</h2>
            <p>This is you!</p>
          </SectionHeader>
          <Form onSubmit={handleSubmitName(onSubmitName)}>
            <label htmlFor="name">Name</label>
            <input
              {...registerName('name', {
                required: 'required',
                pattern: {
                  value: /^[a-zA-Z]{1,15}$/i,
                  message: 'invalid surname / length exceeded',
                },
              })}
            />
            <p className="error">
              {errorsName.name && errorsName.name.message}
            </p>
            <label htmlFor="surname">Surname</label>
            <input
              {...registerName('surname', {
                required: 'required',
                pattern: {
                  value: /^[a-zA-Z]{1,15}$/i,
                  message: 'invalid surname / length exceeded',
                },
              })}
            />
            <p className="error">
              {errorsName.surname && errorsName.surname.message}
            </p>
            <Button type="submit">Change</Button>
          </Form>
        </Section>

        <Section>
          <SectionHeader>
            <h2>Email</h2>
            <p>Your email is used for logging in, as well as being the default method of contact</p>
          </SectionHeader>
          <Form onSubmit={handleSubmitEmail(onSubmitEmail)}>
            <input
              placeholder={user === null ? '' : user.email}
              {...registerEmail('email', {
                required: 'required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'invalid email address',
                },
              })}
            />
            <p className="error">
              {errorsEmail.email && errorsEmail.email.message}
            </p>
            <Button type="submit">Change</Button>
          </Form>
        </Section>

        <Section>
          <SectionHeader>
            <h2>Password</h2>
            <p>Minimum of 8 characters. please avoid commonly used passwords</p>
          </SectionHeader>
          <Form onSubmit={handleSubmitPassword(onSubmitPassword)}>
            <label htmlFor="currentPassword">Current password</label>
            <input type="password" {...registerPassword('currentPassword', { required: 'required' })} />
            <p className="error">{errorsPassword.currentPassword && errorsPassword.currentPassword.message}</p>
            <label htmlFor="newPassword">New password</label>
            <input
              type="password"
              {...registerPassword('newPassword', {
                required: 'required',
                minLength: {
                  value: 8,
                  message: 'minimum of 8 characters',
                },
              })}
            />
            <p className="error">{errorsPassword.newPassword && errorsPassword.newPassword.message}</p>
            <label htmlFor="confirmNewPassword">Confirm new password</label>
            <input
              type="password"
              {...registerPassword('confirmNewPassword', {
                required: 'required',
                minLength: {
                  value: 8 || 'testing',
                  message: 'minimum of 8 characters',
                },
                validate: {
                  value: (value) => value === getValuesPassword('newPassword') || 'password does not match',
                },
              })}
            />
            <p className="error">{errorsPassword.confirmNewPassword && errorsPassword.confirmNewPassword.message}</p>
            <Button type="submit" onSubmit={handleSubmitPassword(onSubmitPassword)}>Change</Button>
          </Form>
        </Section>

        <Section>
          <SectionHeader>
            <h2>Default Deck Setting</h2>
            <p>Linear: incorrectly answered cards will lose one level</p>
            <p>Non-Linear: incorrectly answered cards will reset to level 0.</p>
          </SectionHeader>
          <Form onSubmit={onSubmitRadio}>
            <Switch
              label="Linear"
            />
          </Form>
        </Section>

      </Main>
      <div />
      <SideBar />
    </Container>

  );
};

export default ProfilePage;
