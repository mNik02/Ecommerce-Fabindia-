import axios from "axios";

const baseURL = process.env.REACT_APP_API_BASE_URL;

const instance = axios.create({
  baseURL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

// API endpoints
const API_ENDPOINTS = {
  POST_USER: process.env.REACT_APP_POST_USER,
  LOGIN_USER: process.env.REACT_APP_LOGIN_USER,
  GET_ALL_PRODUCT: process.env.REACT_APP_GET_ALL_PRODUCT,
  POST_PRODUCT: process.env.REACT_APP_POST_PRODUCT,
  
};

export const apiEndpoints = API_ENDPOINTS;


export default instance;
