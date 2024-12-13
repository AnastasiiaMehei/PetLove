import axios from 'axios';

const BASE_URL = 'https://petlove.b.goit.study/api';

const instance = axios.create({
  baseURL: BASE_URL,
});

instance.interceptors.request.use(config => {
  config.headers['Authorization'] = localStorage.getItem('token');
  return config;
});
   // Define the getNoticeById function
   export const getNoticeById = async (noticeId) => {
    try {
      const response = await instance.get(`/notices/${noticeId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching notice by ID:', error);
      throw error;
    }
  };

// Define the addToFavorites function
export const addToFavorites = async (noticeId) => {
  try {
    const response = await instance.post(`/notices/favorites/add/${noticeId}`);
    return response.data;
  } catch (error) {
    console.error('Error adding to favorites:', error);
    throw error;
  }
};

// Define the removeFromFavorites function
export const removeFromFavorites = async (noticeId) => {
  try {
    const response = await instance.delete(`/notices/favorites/remove/${noticeId}`);
    return response.data;
  } catch (error) {
    console.error('Error removing from favorites:', error);
    throw error;
  }
};
export const searchCities = async (query) => {
  try {
    const response = await instance.get('/cities/', {
      params: { search: query },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching cities:', error);
    throw error;
  }
};
// Fetch notice categories
export const getCategories = async () => {
  try {
    const response = await instance.get('/notices/categories');
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};

// Fetch notice sex options
export const getSexOptions = async () => {
  try {
    const response = await instance.get('/notices/sex');
    return response.data;
  } catch (error) {
    console.error('Error fetching sex options:', error);
    throw error;
  }
};

// Fetch notice species
export const getSpecies = async () => {
  try {
    const response = await instance.get('/notices/species');
    return response.data;
  } catch (error) {
    console.error('Error fetching species:', error);
    throw error;
  }
};
export const getPartners = async () => {
  try {
    const response = await instance.get('/friends'); // Adjust the endpoint as needed
    return response.data;
  } catch (error) {
    console.error('Error fetching partners:', error);
    throw error;
  }
};
export const getNews = async (query = '') => {
  try {
    const params = query ? { search: query } : {};
    const response = await instance.get('/news', { params });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};
export const getNotices = async (params = {}) => {
  try {
    const response = await instance.get('/notices', { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching notices:', error);
    throw error;
  }
};
export const registerUser = async (userData) => {
  try {
    const response = await instance.post('/users/signup', userData);
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};

export const loginUser = async (credentials) => {
  try {
    const response = await instance.post('/users/signin', credentials); // Змінили шлях на /users/signin
    localStorage.setItem('token', response.data.token);
    return response.data;
  } catch (error) {
    console.error('Error logging in user:', error);
    throw error;
  }
};