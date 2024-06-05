import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api';

export const perPage = 15;
const API_KEY = '43654443-0aa2ac279d0400a8e119738dd';

const userGallery = async (userSearch, myPage) => {
  const response = await axios.get('https://pixabay.com/api', {
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
