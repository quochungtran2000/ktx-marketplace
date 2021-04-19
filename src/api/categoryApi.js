import axiosClient from './axiosClient'
import { apiUrl } from '../assets/consts/variables'

const categoryApi = {
  getAll: (params) => {
    const url = `${apiUrl}/category`;
    return axiosClient.get(url, { params });
  }
}

export default categoryApi;