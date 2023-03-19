import axios from 'axios';

const API_KEY = '83133a4f0221416bbbf3ca7f6aacf757';
const BASE_URL = 'https://newsapi.org';

axios.defaults.baseURL = BASE_URL;

// export const getNews = async (page = 1) => {
//   const { data } = await axios.get(
//     `/v2/top-headlines?api_key=${API_KEY}&page=${page}`
//   );
//   return data;
// };

export const getNews = async (page = 1) => {
  const { data } = await axios.get('/v2/top-headlines', {
    headers: {
      'X-Api-Key': API_KEY,
    },
    params: {
      page,
    },
  });
  return data;
};
