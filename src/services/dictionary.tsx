/* eslint-disable consistent-return */
import axios from 'axios';

const baseUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

const getDefinition = async (word: string) => {
  try {
    const response = await axios.get(`${baseUrl}${word}`);
    return response.data;
  } catch (e: any) {
    console.log(e.response.data.error);
  }
};

export default { getDefinition };
