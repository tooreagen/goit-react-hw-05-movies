import getMovies from 'api/getMovies';
import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { TrendingHeader } from './Styled/Home.styled';
import { MoviesList, MoviesItem } from './Styled/Movies.styled';


const Home = () => {
  const [trendingMovie, setTrendingMovie] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const path = 'trending/movie/week';
  const location = useLocation();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setTrendingMovie((await getMovies(path)).moviesObject.results);
      } catch (error) {
        console.log(error);
        setFetchError(error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <>
      <TrendingHeader>Trending today</TrendingHeader>
      <MoviesList>
        {trendingMovie.map(item => {
          return (
            <MoviesItem key={item.id}>
              <NavLink to={`movies/${item.id}`} state={{ from: location }} >{item.title}</NavLink>
            </MoviesItem>
          );
        })}
      </MoviesList>
    </>
  );
};

export default Home;
