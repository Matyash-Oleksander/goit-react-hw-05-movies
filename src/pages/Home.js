import { getTrending } from './api';
import { useState, useEffect } from 'react';
import { FilmsList } from '../components/FilmList/FilmsList';
// import { Link } from 'react-router-dom';

const Home = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    try {
      getTrending().then(r => setFilms(r.results));
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <FilmsList films={films} />
    </main>
  );
};

export default Home;
