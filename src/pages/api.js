import axios from 'axios';

const API_KEY = '39c85cbe6405a47f44401a8e3d701a0f';
const BASE_URL = 'https://api.themoviedb.org/3';

axios.defaults.baseURL = BASE_URL;

export const BASE_IMG_URL = `https://image.tmdb.org/t/p`;
export const IMG_W500 = `/w500`;
export const IMG_W400 = `/w400`;
export const IMG_W300 = `/w300`;
export const IMG_W200 = `/w200`;
export const IMG_W100 = `/w100`;
export const IMG_ORIG = `/original`;

export const getTrending = async (page = 1) => {
  const { data } = await axios.get(
    `/trending/movie/week?api_key=${API_KEY}&page=${page}`
  );
  return data;
};

export const getFilmById = async movieId => {
  const { data } = await axios.get(`/movie/${movieId}?api_key=${API_KEY}`);
  return data;
};

export const getMovieCast = async movieId => {
  const { data } = await axios.get(
    `/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  return data;
};

export const getMovieReviews = async movieId => {
  const { data } = await axios.get(
    `/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return data;
};

export const getSearchMovie = async (query, page) => {
  const { data } = await axios.get(
    `/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=${page}`
  );
  return data;
};

// import axios from 'axios';

// const BASE_URL = `https://api.themoviedb.org/3/`;

// // const BASE_GENRE_URL = 'https://api.themoviedb.org/3/genre/movie/list?';

// // const BASE_POSTER_URL = 'https://image.tmdb.org/t/p/w500/';

// const API_KEY = '39c85cbe6405a47f44401a8e3d701a0f';

// export const BASE_IMG_URL = `https://image.tmdb.org/t/p`;
// export const IMG_W500 = `/w500`;
// export const IMG_W400 = `/w400`;
// export const IMG_W300 = `/w300`;
// export const IMG_W200 = `/w200`;
// export const IMG_W100 = `/w100`;
// export const IMG_ORIG = `/original`;

// axios.defaults.baseURL = BASE_URL;

// export const fetchMovies = async () => {
//   try {
//     const r = await axios.get(
//       `${BASE_URL}trending/movie/day?&api_key=${API_KEY}`
//     );
//     console.log(r.data);
//     // console.log(r.data.id);
//     return r.data;
//   } catch (error) {}
// };

// export const getFilmById = async id => {
//   const { data } = await axios.get(`/movie/${id}?api_key=${API_KEY}`);
//   console.log(data);
//   return data;
// };
