import axios from 'axios';

const BASE_URL = 'http://localhost:5173/api/auth';

export const signUp = async (email: string, username: string, password: string) => {
  try {
    const response = await axios.post(`${BASE_URL}/signup`, { email, username, password });
    return response.data;
  } catch (error) {
    console.error('Error during signup:', error);
    throw error;
  }
};

export const logIn = async (username: string, password: string) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, { username, password });
    return response.data;
  } catch (error) {
    console.error('Error during login', error);
    throw error;
  }
};
