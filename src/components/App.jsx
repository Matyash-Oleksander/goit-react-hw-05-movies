import { Route, Routes } from 'react-router-dom';
import { Home } from '../components/pages/Home';
import { Movies } from '../components/pages/Movies';
// import NotFound from 'path/to/pages/NotFound';
// import { useState, useEffect } from 'react';
// import { fetchMovies } from '../api/api';
import { GlobalStyle } from 'GlobalStyle';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Movies />}>
          {/* <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} /> */}
        </Route>
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <GlobalStyle />
    </>
  );
};
