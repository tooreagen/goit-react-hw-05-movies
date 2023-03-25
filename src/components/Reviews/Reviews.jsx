import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getMovies from 'api/getMovies';
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
  }, [path]);

  useEffect(() => {
    console.log(fetchError);
  }, [fetchError]);

  return (
    <>
      {reviews.length ? (
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
        <p>We don`t have any reviews for this movie</p>
      )}
    </>
  );
};

export default Reviews;
