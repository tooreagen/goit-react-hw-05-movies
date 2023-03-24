import { Outlet, useParams, useLocation } from 'react-router-dom';
import getMovies from 'api/getMovies';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Loading from 'components/Loading/Loading';
import {
  BackLink,
  Scope,
  MovieHeaderH4,
  MovieHeaderH3,
  MovieBlock,
  GenresItem,
  AddInfo,
} from './Styled/MoviesDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const path = `movie/${movieId}`;
  const [fetchError, setFetchError] = useState(null);
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/products';

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setMovie((await getMovies(path)).moviesObject);
      } catch (error) {
        setFetchError(error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <main>
      <BackLink to={backLinkHref}>{'< '}Go back</BackLink>
      {movie ? (
        <div>
          <MovieBlock>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                height={250}
              />
            </div>
            <div>
              <h2>
                {movie.title} {'('}
                {movie.release_date.split('-')[0]}
                {')'}
              </h2>
              <Scope>
                User Scope: {(Number(movie.vote_average) * 10).toFixed(0)}
                {'%'}
              </Scope>
              <MovieHeaderH3>Overview</MovieHeaderH3>
              <p>{movie.overview}</p>
              <MovieHeaderH4>Genres</MovieHeaderH4>
              {movie.genres.map(item => {
                return <GenresItem key={item.id}>{item.name}</GenresItem>;
              })}
            </div>
          </MovieBlock>

          <AddInfo>
            <p>Additional information</p>
            <ul>
              <li>
                <NavLink to={'cast'}>Cast</NavLink>
              </li>
              <li>
                <NavLink to={'reviews'}>Reviews</NavLink>
              </li>
            </ul>
          </AddInfo>
          <div>
            <Outlet />
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </main>
  );
};

export default MovieDetails;