import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

// import { AppState } from '../context/AppState';
import { authService } from './authService';

const API_URL = process.env.REACT_APP_API;

export const api: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    accept: 'application/json',
  },
});

api.interceptors.request.use(
  async (config: AxiosRequestConfig): Promise<AxiosRequestConfig> => {
    if (config.headers && authService.isLoggedIn()) {
      config.headers.Authorization = `Bearer ${authService.getAccessKey()}`;
    }

    return config;
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      authService.logout();
    }

    return Promise.reject(error);
  }
);

// export const initAppState = (state: AppState) => {
//   let appState: AppState;

//   appState = state;
// };
