import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Movies } from '../pages/Movies';
// import { MovieDetails } from '../pages/MovieDetails';
import { Cast } from '../components/Cast';
import { Reviews } from '../components/Reviews';
import { SharedLayout } from './SharedLayout';
import { lazy } from 'react';
// import NotFound from 'path/to/pages/NotFound';
// import { useState, useEffect } from 'react';
// import { fetchMovies } from '../api/api';
import { GlobalStyle } from 'GlobalStyle';

const MovieDetails = lazy(() => import('pages/MovieDetails'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<div>Not Found</div>} />
        </Route>
      </Routes>
      <GlobalStyle />
    </div>
  );
};
