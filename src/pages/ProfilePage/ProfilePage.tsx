/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import './style.css';
import { useForm } from 'react-hook-form';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SideBar from '../../components/SideBar/SideBar';
import { setFromLocal, updateUser } from '../../reducers/userReducer';
import { setNotification } from '../../reducers/notificationReducer';

const ProfilePage = () => {
  const dispatch = useDispatch();
  const notification = useSelector((state: any) => state.notification);
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
    dispatch(setNotification('Name changed successfully'));
    setTimeout(() => dispatch(setNotification('')), 3000);
  };

  const onSubmitPassword = async (data: any) => {
    const response: any = await dispatch(updateUser(data));
    if (response === 'Incorrect Password') {
      setErrorPassword('currentPassword', {
        type: 'manual',
        message: 'Incorrect Password',
      });
    } else {
      dispatch(setNotification('Password changed successfully'));
      setTimeout(() => dispatch(setNotification('')), 3000);
    }
  };

  const onSubmitEmail = async (data: any) => {
    const response: any = await dispatch(updateUser(data));
    if (response === 'email not unique') {
      setError('email', {
        type: 'manual',
        message: 'Email unavailable',
      });
    } else {
      dispatch(setNotification('Email changed successfully'));
      setTimeout(() => dispatch(setNotification('')), 3000);
    }
  };

  const onSubmitRadio = async (data: any) => {
    console.log('radio clicked', data);
  };

  useEffect(() => {
    dispatch(setFromLocal());
  }, []);

  return (
    <div className="profile-page">
      <b className="notification">{notification}</b>
      <div className="profile-page__header">
        <h1>{user === null ? 'null' : user.name}</h1>
        <h1>{user === null ? 'null' : user.surname}</h1>
      </div>
      <div className="profile-page__main">
        <div>
          <div>
            <h2>Name</h2>
            <p>This is you!</p>
          </div>
          <form onSubmit={handleSubmitName(onSubmitName)}>
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
          </form>
        </div>

        <div>
          <div>
            <h2>Email</h2>
            <p>Your email is used for logging in, as well as being the default method of contact</p>
          </div>
          <form onSubmit={handleSubmitEmail(onSubmitEmail)}>
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
          </form>
        </div>

        <div>
          <div>
            <h2>Password</h2>
            <p>Minimum of 8 characters. please avoid commonly used passwords</p>
          </div>
          <form onSubmit={handleSubmitPassword(onSubmitPassword)}>
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
          </form>
        </div>

        <div>
          <div>
            <h2>Default Deck Setting</h2>
            <p>Linear: incorrectly answered cards will lose one level</p>
            <p>Non-Linear: incorrectly answered cards will reset to level 0.</p>
          </div>
          <form onSubmit={onSubmitRadio}>
            <Form.Check
              disabled
              checked
              type="switch"
              id="linear-switch"
              label="Linear"
            />
          </form>
        </div>

      </div>
      <div />
      <SideBar />
    </div>

  );
};

export default ProfilePage;
