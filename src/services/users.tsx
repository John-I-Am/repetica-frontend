import axios from 'axios';

const register = async (newUser: any) => {
  const response = await axios.post('/api/users', newUser);
  return response.data;
};

const login = async (credentials: any) => {
  const response = await axios.post('/api/login', credentials);
  return response.data;
};

export default { register, login };
