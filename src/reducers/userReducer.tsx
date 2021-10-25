import userService from '../services/users';
import cardService from '../services/cards';

const userReducer = (state = null, action: any) => {
  switch (action.type) {
    case 'SET_USER':
      return action.data;
    case 'REGISTER_USER':
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
  } catch (e) {
    console.log(e);
  }
};

export const registerUser = (newUser: any) => async (dispatch: any) => {
  try {
    await userService.register(newUser);
    dispatch(setUser(newUser));
  } catch (e) {
    console.log(e);
  }
};

export default userReducer;
