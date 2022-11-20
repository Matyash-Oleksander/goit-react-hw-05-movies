import { fetchMovies } from './api';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { fetchPhoto } from './api';

export const MovietList = () => {
  const [movies, setMovies] = useState([]);
  // const [photos, setPhotos] = useState([]);

  useEffect(() => {
    // setMessage('');
    getData();
  }, []);

  const getData = () => {
    fetchMovies().then(r => {
      const movies = r.results.map(({ id, title }) => ({
        id,
        title,
      }));
      setMovies([...movies]);
      console.log(movies);
    });
  };

  return (
    <main>
      <h1>Trending today</h1>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to="movies">{movie.title}</Link>
        </li>
      ))}
    </main>
  );
};
