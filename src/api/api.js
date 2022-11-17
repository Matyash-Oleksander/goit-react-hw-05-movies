import axios from 'axios';

const BASE_URL = `https://api.themoviedb.org/3/`;
const API_KEY = '39c85cbe6405a47f44401a8e3d701a0f';

axios.defaults.baseURL = BASE_URL;

export const fetchMovies = async () => {
  try {
    const r = await axios.get(
      `${BASE_URL}trending/movie/day?&api_key=${API_KEY}`
    );
    return r.data;
  } catch (error) {
    console.log(error);
  }
};

// FETCHING FILMS FOR THE FIRST TIME
// fetchTrendingMovies() {
//   const url = `${BASE_TRENDING_MOVIES_URL}trending/movie/day?&api_key=${API_KEY}&page=${
//     this._page
//   }&language=${this.setLanguage()}`;

//   return fetch(url).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   });
// }
