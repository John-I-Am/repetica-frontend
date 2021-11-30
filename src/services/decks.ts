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
  const response = await axios.get('/api/decks', config);
  return response.data;
};

const create = async () => {
  const config: any = {
    headers: { Authorization: token },
  };
  const response = await axios.post('/api/decks', {}, config);
  return response.data;
};

const update = async (deck: any) => {
  const config: any = {
    headers: { Authorization: token },
  };
  const response = await axios.put(`/api/decks/${deck.id}`, deck, config);
  return response.data;
};

const remove = async (id: any) => {
  const config: any = {
    headers: { Authorization: token },
  };
  const response = await axios.delete(`/api/decks/${id}`, config);
  return response.data;
};

export default {
  setToken, getAll, create, update, remove,
};
