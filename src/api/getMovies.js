import axios from 'axios';

const getMovies = async (path, query) => {
  const apiKEY = '427820c7b2f29f232bc908a76595fbeb';
  const URL = `https://api.themoviedb.org/3/${path}?api_key=${apiKEY}${
    query ? query : ''
  }`;

  const response = axios.get(URL);
  return {
    moviesObject: (await response).data,
  };
};

export default getMovies;
