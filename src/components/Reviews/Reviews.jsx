import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getMovies from 'api/getMovies';
import Loading from 'components/Loading/Loading';
import { ReviewsList, ReviewsItem, ReviewsAuthor } from './Reviews.styled';


const Reviews = () => {
  const { movieId } = useParams();
  const path = `movie/${movieId}/reviews`;
  const [fetchError, setFetchError] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviewsMovie = async () => {
      try {
        setReviews((await getMovies(path)).moviesObject.results);
      } catch (error) {
        setFetchError(error);
      }
    };

    fetchReviewsMovie();
  }, []);

  return (
    <>
      {reviews ? (
        <ReviewsList>
          {reviews.map(item => {
            return (
              <ReviewsItem key={item.id}>
                <ReviewsAuthor>Author: {item.author}</ReviewsAuthor>
                <p>{item.content}</p>
              </ReviewsItem>
            );
          })}
        </ReviewsList>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Reviews;