import axios from 'axios';
import { errorCheck as _errorCheck } from '../api';

export const errorCheck = (res) => {
  if (res.error) {
    throw new Error(res.error);
  }
  return res;
};

export default {
  get(path, dispatch, callback) {
    // 画面でcatchの処理をしたい場合はそのcallbackを渡さなければいけなくなる
    // それならcatchは呼び出し元でやった方がいい
    // そうするとリクエスト中のステートをどうやって変更するかが問題(スピナーの表示や２度押しの防止)
    return axios.get(`http://localhost:3000/${path}`)
      .then(res => _errorCheck(res.data))
      .then(res => callback(res))
      .catch(error => dispatch({ type: 'ERROR', error })
    );
  },
  post(path, params) {
    return axios.post(`http://localhost:3000/${path}`, params).then(res => res.data);
  },
}