import axios from 'axios';

const lang = localStorage.getItem('ng-locale') || 'en';

const URL = import.meta.env.VITE_BASE_API_URL;
const axiosClient = axios.create({
  baseURL: URL,
  headers: {
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'Accept-Language': lang,
  },
});

axiosClient.interceptors.request.use((config) => {
  const token = ''; // add your token handling logic here
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

axiosClient.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export default axiosClient;
