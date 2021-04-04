import axiosClient from './axiosClient'
import { apiUrl } from '../assets/consts/variables'

const postApi = {
  getAll: (params) => {
    const url = `${apiUrl}/posts`;
    return axiosClient.get(url, { params });
  },
  getById: (id) => {
    const url = `${apiUrl}/post/${id}`;
    return axiosClient.get(url);
  }
}

export default postApi;