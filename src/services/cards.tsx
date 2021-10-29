/* eslint-disable consistent-return */
import axios from 'axios';

let token: string | null = null;

const setToken = (newToken: any) => {
  token = `bearer ${newToken}`;
};

const getAll = async () => {
  try {
    const config: any = {
      headers: { Authorization: token },
    };
    const response = await axios.get('/api/cards', config);
    return response.data;
  } catch (e: any) {
    console.log(e.response.data.error);
  }
};

const create = async (newNote: any) => {
  try {
    const config: any = {
      headers: { Authorization: token },
    };
    const response = await axios.post('/api/cards', newNote, config);
    return response.data;
  } catch (e: any) {
    console.log(e.response.data.error);
  }
};

export default { setToken, getAll, create };
