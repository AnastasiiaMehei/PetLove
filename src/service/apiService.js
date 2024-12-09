import axios from 'axios';

const BASE_URL = 'https://petlove.b.goit.study/api/v1';

const instance = axios.create({
  baseURL: BASE_URL,
});

instance.interceptors.request.use(config => {
  config.headers['Authorization'] = localStorage.getItem('token');
  return config;
});

export const getNews = async () => {
  try {
    const response = await instance.get('/news');
    return response.data;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};

export const getNotices = async () => {
  try {
    const response = await instance.get('/notices');
    return response.data;
  } catch (error) {
    console.error('Error fetching notices:', error);
    throw error;
  }
};

export const registerUser = async (userData) => {
  try {
    const response = await instance.post('/auth/register', userData);
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};

export const loginUser = async (credentials) => {
  try {
    const response = await instance.post('/auth/login', credentials);
    localStorage.setItem('token', response.data.token);
    return response.data;
  } catch (error) {
    console.error('Error logging in user:', error);
    throw error;
  }
};