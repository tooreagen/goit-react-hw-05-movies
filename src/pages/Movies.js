import { useSearchParams, useLocation } from 'react-router-dom';
import getMovies from 'api/getMovies';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  NotificationContainer,
  NotificationManager,
} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import SearchForm from 'components/SearchForm/SearchForm';
import Loading from 'components/Loading/Loading';
import { MoviesList, MoviesItem } from './Styled/Movies.styled';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const [movies, setMovies] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (query === '' || query === null) {
      return;
    }
    const fetchMovies = async () => {
      try {
        setMovies(null)
        const moviesObject = await (
          await getMovies(`search/movie`, `&query=${query}`)
        ).moviesObject.results;
        setMovies(moviesObject);

        if (moviesObject.length === 0) {
          NotificationManager.info('Movies not found');
        }
      } catch (error) {
        setFetchError(error);
      }
    };

    fetchMovies();
  }, [query]);

    useEffect(() => {
      console.log(fetchError);
    }, [fetchError]);

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const queryStringInput = form.elements.query.value;
    if (!queryStringInput) {
      NotificationManager.error('Enter search text');
      return;
    }
    setSearchParams({ query: queryStringInput });
    form.reset();
  };

  return (
    <>
      <SearchForm handleSubmit={handleSubmit} />
      {movies ? (
        <MoviesList>
          {movies.map(item => {
            return (
              <MoviesItem key={item.id}>
                <NavLink to={`${item.id}`} state={{ from: location }}>
                  {item.title}
                </NavLink>
              </MoviesItem>
            );
          })}
        </MoviesList>
      ) : (
        <Loading />
      )}
      <NotificationContainer />
    </>
  );
};

export default Movies;
