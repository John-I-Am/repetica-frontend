import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFromLocal } from '../reducers/userReducer';
import { initializeCards } from '../reducers/cardReducer';

const useInitialize = () => {
  const [user, setUser] = useState<any>(window.localStorage.getItem('currentUser'));

  const dispatch = useDispatch();

  const initialize = () => {
    const userParsed: any = JSON.parse(user);
    dispatch(setFromLocal(userParsed));
    dispatch(initializeCards());
  };

  const setLocal = (newUser: any) => {
    setUser(newUser);
  };

  return {
    user,
    initialize,
    setLocal,
  };
};

export default useInitialize;
