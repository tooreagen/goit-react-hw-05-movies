import { Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import Home from '../pages/Home';
import Reviews from './Reviews/Reviews';
import Cast from './Cast/Cast';
import MovieDetails from '../pages/MovieDetails';
import Movies from '../pages/Movies';

export const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
