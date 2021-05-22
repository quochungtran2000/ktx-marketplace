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
  getByUser: (params) => {
    const url = `${apiUrl}/post2?${params}`;
    return axiosClient.get(url);
  },
  deleteById: (id) => {
    return axiosClient.delete(`${apiUrl}/delete/${id}`)
  }
}

export default postApi;