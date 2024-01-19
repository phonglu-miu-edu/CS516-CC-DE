import axios from 'axios';
import Constants from 'Constants';

const axiosInstance = axios.create({
  baseURL: Constants.BASE_URL
});

export default axiosInstance;