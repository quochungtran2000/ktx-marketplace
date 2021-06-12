import axiosClient from './axiosClient'
import { apiUrl } from '../assets/consts/variables'

const staticPageApi = {
  getByType: (type) => {
    const url = `${apiUrl}/staticpage/${type}`;
    return axiosClient.get(url);
  },
}

export default staticPageApi;