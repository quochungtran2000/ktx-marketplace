import axiosClient from './axiosClient'
import { apiUrl } from '../assets/consts/variables'

const locationApi = {
  getAll: (params) => {
    const url = `${apiUrl}/location`;
    return axiosClient.get(url, { params });
  }
}

export default locationApi;