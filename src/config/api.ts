import axios from 'axios';

//import { getAccessToken } from '../security/getAssessToken';

const API_URL = 'http://localhost:5000';

export const api = axios.create({
  baseURL: API_URL,
  withCredentials: true
});

// api.interceptors.request.use(
//   (config) => {
//     const token = getAccessToken();
//     if (token) {
//       if (!config.headers) {
//         config.headers = {};
//       }
//       (config.headers as Record<string, string>)['Authorization'] = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );