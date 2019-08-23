import axios from "axios";

export const http = axios.create({
  baseURL: process.env.VUE_APP_API,
  timeout: 0
});

http.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);
