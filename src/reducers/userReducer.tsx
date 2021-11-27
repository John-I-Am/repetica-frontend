/* eslint-disable consistent-return */
import userService from '../services/users';
import cardService from '../services/cards';
import deckService from '../services/decks';
import { clearActiveDeck } from './activeDeckReducer';

const userReducer = (state = null, action: any) => {
  switch (action.type) {
    case 'SET_USER':
      return action.data;
    case 'CLEAR_USER':
      window.localStorage.clear();
      return null;
    default:
      return state;
  }
};

export const setUser = (user: any) => async (dispatch: any) => {
  try {
    await dispatch(clearActiveDeck());
    const currentUser: any = await userService.login(user);
    cardService.setToken(currentUser.token);
    userService.setToken(currentUser.token);
    deckService.setToken(currentUser.token);
    window.localStorage.setItem(
      'currentUser', JSON.stringify(currentUser),
    );
    await dispatch({
      type: 'SET_USER',
      data: currentUser,
    });
  } catch (e: any) {
    console.log(e);
    return e.response.data.error;
  }
};

export const setFromLocal = () => async (dispatch: any) => {
  try {
    const session: any = window.localStorage.getItem('currentUser');
    const sessionParsed = JSON.parse(session);
    cardService.setToken(sessionParsed.token);
    userService.setToken(sessionParsed.token);
    deckService.setToken(sessionParsed.token);
    const currentUser = await userService.fetch();
    dispatch({
      type: 'SET_USER',
      data: currentUser,
    });
  } catch (e: any) {
    console.log(e);
  }
};

export const updateUser = (newUser: any) => async (dispatch: any) => {
  try {
    const response = await userService.update(newUser);
    dispatch({
      type: 'SET_USER',
      data: response,
    });
  } catch (e: any) {
    console.log(e);
    return (e.response.data.error);
  }
};

export const registerUser = (newUser: any) => async (dispatch: any) => {
  try {
    await userService.register(newUser);
    await dispatch(setUser(newUser));
  } catch (e: any) {
    console.log(e);
    return (e.response.data.error);
  }
};

export const clearUser = () => ({
  type: 'CLEAR_USER',
});

export default userReducer;
