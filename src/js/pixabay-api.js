import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export const perPage = 15;
const API_KEY = '44242951-779ddab31bb84492c2ee50b34';

const userGallery = async (userSearch, myPage) => {
  const response = await axios.get('https://pixabay.com/api/', {
    params: {
      key: API_KEY,
      q: userSearch,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      per_page: perPage,
      page: myPage,
    },
  });

  return response.data;
};

export default userGallery;
