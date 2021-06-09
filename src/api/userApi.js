import axiosClient from './axiosClient'
import { apiUrl } from '../assets/consts/variables'

const userApi = {
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
  getUser: (config) => {
    const url = `${apiUrl}/getUser`;
    return axiosClient.get(url,config)
  },
  createUser: (user) => {
    const url = `${apiUrl}/user/signup`
    return axiosClient.post(url, user)
  }
}

export default userApi;  