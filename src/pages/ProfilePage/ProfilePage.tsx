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

const ProfilePage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);

  const {
    register: registerEmail, handleSubmit: handleSubmitEmail, formState: { errors: errorsEmail },
  } = useForm();

  const {
    register, handleSubmit, formState: { errors },
  } = useForm();

  const onSubmitPassword = async (data: any) => {
    dispatch(updateUser(data));
  };

  const onSubmitEmail = async (data: any) => {
    const test = dispatch(updateUser(data));
    console.log(test);
  };

  const onSubmitRadio = async (data: any) => {
    console.log('radio clicked', data);
  };

  useEffect(() => {
    dispatch(setFromLocal());
  }, []);

  return (
    <div className="profile-page">
      <div className="profile-page__header">
        <h1>{user === null ? 'null' : user.name}</h1>
        <h1>{user === null ? 'null' : user.surname}</h1>
      </div>
      <div className="profile-page__main">
        <div>
          <div>
            <h2>Email</h2>
            <p>Your email is used for logging in, as well as being the default method of contact</p>
          </div>
          <form onSubmit={handleSubmitEmail(onSubmitEmail)}>
            <input defaultValue={user === null ? '' : user.email} {...registerEmail('email', { required: true })} />
            {errorsEmail.email && <span>This field is required</span>}
            <Button type="submit">Change</Button>
          </form>
        </div>

        <div>
          <div>
            <h2>Password</h2>
            <p>Minimum of 8 characters. please avoid commonly used words</p>
          </div>
          <form onSubmit={handleSubmit(onSubmitPassword)}>
            <label htmlFor="currentPassword">Current password</label>
            <input type="password" {...register('currentPassword', { required: true })} />
            {errors.currentPassword && <span>This field is required</span>}
            <label htmlFor="newPassword">New password</label>
            <input type="password" {...register('newPassword', { required: true, minLength: 8 })} />
            {errors.newPassword && <span>Minimum of 8 characters</span>}
            <label htmlFor="confirmNewPassword">Confirm new password</label>
            <input type="password" {...register('confirmNewPassword', { required: true, minLength: 8 })} />
            {errors.confirmNewPassword && <span>Minimum of 8 characters</span>}
            <Button type="submit" onSubmit={handleSubmit(onSubmitPassword)}>Change</Button>
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
