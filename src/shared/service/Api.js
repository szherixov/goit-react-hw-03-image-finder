import axios from 'axios';

const key = '25295806-f56e9b8be8572c7913b85b3e5';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: {
    key: key,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
  },
});

const searchPictures = (page = 1, q) => {
  return instance.get('/', {
    params: {
      page,
      q,
    },
  });
};

export const productsApi = {
  searchPictures,
};
