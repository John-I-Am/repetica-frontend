/* eslint-disable no-unused-vars */
import axios from 'axios';

let token = null;

const setToken = (newToken: any) => {
  token = `bearer ${newToken}`;
};

export default { setToken };
