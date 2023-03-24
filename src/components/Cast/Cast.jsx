import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getMovies from 'api/getMovies';
import Loading from 'components/Loading/Loading';
import { CastList } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const path = `movie/${movieId}/credits`;
  const [fetchError, setFetchError] = useState(null);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCastMovie = async () => {
      try {
        setCast((await getMovies(path)).moviesObject.cast);
      } catch (error) {
        setFetchError(error);
      }
    };

    fetchCastMovie();
  }, []);

  useEffect(() => {
    console.log(cast);
    cast.map(item => { console.log(item.id) });
  }, [cast]);

  return (
    <>
      {cast ? (
        <CastList>
          {cast.map(item => {
            return (
              <li key={item.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                  width={200}
                />
                <p>{item.name}</p>
                <p>{item.character}</p>
              </li>
            );
          })}
        </CastList>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Cast;