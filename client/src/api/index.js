import axios from 'axios';
import { errorCheck as _errorCheck } from '../api';

export const errorCheck = (res) => {
  if (res.error) {
    throw new Error(res.error);
  }
  return res;
};

export default {
  get(path) {
    return axios.get(`http://localhost:3000/${path}`)
      .then(res => _errorCheck(res.data));
  },
  post(path, params = {}) {
    return axios.post(`http://localhost:3000/${path}`, params).then(res => res.data);
  },
}