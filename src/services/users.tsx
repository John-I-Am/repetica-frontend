/* eslint-disable consistent-return */
import axios from 'axios';

let token: string | null = null;

const setToken = (newToken: any) => {
  token = `bearer ${newToken}`;
};

const register = async (newUser: any) => {
  const response = await axios.post('/api/users', newUser);
  return response.data;
};

const login = async (credentials: any) => {
  const response = await axios.post('/api/login', credentials);
  return response.data;
};

const update = async (newCredentials: any) => {
  const config: any = {
    headers: { Authorization: token },
  };
  const response = await axios.put('/api/users', newCredentials, config);
  return response.data;
};

const fetch = async () => {
  const config: any = {
    headers: { Authorization: token },
  };
  const response = await axios.get('/api/users', config);
  return response.data;
};

export default {
  register, login, fetch, setToken, update,
};
