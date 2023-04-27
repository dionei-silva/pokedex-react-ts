import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

const doGet = async (url: string) => {
  try {
    const response = await api.get(url);

    console.log('API', response);
    return response.data;
  } catch (error) {
    return false;
  }
};

export { doGet };
