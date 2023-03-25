import { Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import { lazy } from 'react';
import Layout from './Layout/Layout';

const Reviews = lazy(() => import('./Reviews/Reviews'));
const Cast = lazy(() => import('./Cast/Cast'));
const Home = lazy(() => import('../pages/Home'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Movies = lazy(() => import('../pages/Movies'));


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

//заглушка без фото http://localhost:3000/goit-react-hw-05-movies/movies/280/cast
//посмотреть структура кода, main, footer, header/
//We don't have any reviews for this movie
//propTypes
//позабирати всы помилки у консолымVSCode

//порівняти з відео мою прогу
//центрування конетнту
///style active на кнопку
