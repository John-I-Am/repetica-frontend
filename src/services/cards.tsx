import axios from 'axios';

let token: string | null = null;

const setToken = (newToken: any) => {
  token = `bearer ${newToken}`;
};

const getAll = async () => {
  const response = await axios.get('/api/cards');
  return response.data;
};

const create = async (newNote: any) => {
  const config: any = {
    headers: { Authorization: token },
  };
  const response = await axios.post('/api/cards', newNote, config);
  return response.data;
};

export default { setToken, getAll, create };
