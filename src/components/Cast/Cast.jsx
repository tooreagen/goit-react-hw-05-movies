import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getMovies from 'api/getMovies';
import { CastList, CastItemThumb } from './Cast.styled';

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
  }, [path]);

  useEffect(() => {
    console.log(fetchError);
  }, [fetchError]);

  return (
    <>
      {cast.length ? (
        <CastList>
          {cast.map(item => {
            return (
              <CastItemThumb>
                <li key={item.cast_id}>
                  <div>
                    {item.profile_path ? (
                      <img
                        src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                        alt={'Actor poster'}
                      />
                    ) : (
                      <img
                        src={require(`../../images/nophoto.png`)}
                        alt={'Actor poster not found'}
                      />
                    )}
                  </div>
                  <div>
                    <p>{item.name}</p>
                    <p>{item.character}</p>
                  </div>
                </li>
              </CastItemThumb>
            );
          })}
        </CastList>
      ) : (
        <p>We don`t have any cast for this movie</p>
      )}
    </>
  );
};

export default Cast;
