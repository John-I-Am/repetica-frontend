/* eslint-disable consistent-return */
import axios from 'axios';

let token: string | null = null;

const setToken = (newToken: any) => {
  token = `bearer ${newToken}`;
};

const getAll = async () => {
  const config: any = {
    headers: { Authorization: token },
  };
  const response = await axios.get('/api/cards', config);
  return response.data;
};

const create = async (newCard: any) => {
  const config: any = {
    headers: { Authorization: token },
  };
  const response = await axios.post('/api/cards', newCard, config);
  return response.data;
};

const update = async (updatedCard: any) => {
  const config: any = {
    headers: { Authorization: token },
  };
  const response = await axios.put(`/api/cards/${updatedCard.id}`, updatedCard, config);
  return response.data;
};

export default {
  setToken, getAll, create, update,
};
