import axiosClient from './axiosClient'
import { apiUrl } from '../assets/consts/variables'

const postApi = {
  getAll: (params) => {
    let url = `${apiUrl}/post`;
    if(!!params) url = `${apiUrl}/post?${params}`
    // const url = `${apiUrl}/post`;
    return axiosClient.get(url);
  },
  getById: (id) => {
    const url = `${apiUrl}/post/${id}`;
    return axiosClient.get(url);
  },
}

export default postApi;