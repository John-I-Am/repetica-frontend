import userService from '../services/users';
import cardService from '../services/cards';
import { setError } from './errorReducer';

const userReducer = (state = null, action: any) => {
  switch (action.type) {
    case 'SET_USER':
      return action.data;
    case 'REGISTER_USER':
      return action.data;
    case 'CLEAR_USER':
      window.localStorage.clear();
      return null;
    case 'SET_FROM_LOCAL':
      cardService.setToken(action.data.token);
      return action.data;
    default:
      return state;
  }
};

export const setUser = (user: any) => async (dispatch: any) => {
  try {
    const currentUser: any = await userService.login(user);
    cardService.setToken(currentUser.token);
    window.localStorage.setItem(
      'currentUser', JSON.stringify(currentUser),
    );
    dispatch({
      type: 'SET_USER',
      data: currentUser,
    });
  } catch (e: any) {
    if ((e.response.data.error).includes('invalid email or pssword')) {
      dispatch(setError('Incorrect Credentials'));
      setTimeout(() => dispatch(setError('')), 4000);
    }
    console.log(e);
  }
};

export const setFromLocal = (user: any) => ({
  type: 'SET_FROM_LOCAL',
  data: user,
});

export const registerUser = (newUser: any) => async (dispatch: any) => {
  try {
    await userService.register(newUser);
    dispatch(setUser(newUser));
  } catch (e: any) {
    if ((e.response.data.error).includes('email not unique')) {
      dispatch(setError('Email Taken'));
      setTimeout(() => dispatch(setError('')), 4000);
    }
    console.log(e);
  }
};

export const clearUser = () => ({
  type: 'CLEAR_USER',
});

export default userReducer;
