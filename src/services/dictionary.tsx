/* eslint-disable consistent-return */
import axios from 'axios';

const baseUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

const getDefinition = async (word: string) => {
  const response = await axios.get(`${baseUrl}${word}`);
  return response.data;
};

export default { getDefinition };
