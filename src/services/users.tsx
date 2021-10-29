/* eslint-disable consistent-return */
import axios from 'axios';

const register = async (newUser: any) => {
  try {
    const response = await axios.post('/api/users', newUser);
    return response.data;
  } catch (e: any) {
    console.log(e.response.data.error);
  }
};

const login = async (credentials: any) => {
  try {
    const response = await axios.post('/api/login', credentials);
    return response.data;
  } catch (e: any) {
    console.log(e.response.data.error);
  }
};

export default { register, login };
