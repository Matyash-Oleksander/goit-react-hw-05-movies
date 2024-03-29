import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { GlobalStyle } from 'GlobalStyle';
import { SharedLayout } from './SharedLayout';

const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const News = lazy(() => import('pages/News/News'));
// const NewDetails = lazy(() => import('pages/NewDetails/NewDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

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
          <Route path="news" element={<News />} />
          {/* <Route path="news/:newId" element={<NewDetails />}></Route> */}
        </Route>
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
      <GlobalStyle />
    </div>
  );
};
