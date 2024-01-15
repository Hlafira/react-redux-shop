import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://63f4926e2213ed989c45a6d0.mockapi.io/name',
  timeout: 1000,
});

export const getProducts = async () => {
  const result = await instance.get('/', {
    params: {
      limit: 12,
      page: 1,
    },
  });
  return result.data;
};
