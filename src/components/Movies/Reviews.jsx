import { fetchMoviesReviews } from 'api';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMoviesReviews(movieId).then(r => {
      const mappedReviews = [];
      r.results.map(({ author, content, id }) => {
        const authorReview = {
          id: id,
          author: author,
          review: content,
        };
        return mappedReviews.push(authorReview);
      });
      setReviews(mappedReviews);
    });
  }, [movieId]);

  return reviews && reviews.length > 0 ? (
    <ul>
      {reviews.map(({ author, review, id }) => (
        <li key={id}>
          <p>
            {author}: <span>"{review}"</span>
          </p>
        </li>
      ))}
    </ul>
  ) : (
    <p>We have no reviews here yet.</p>
  );
};
export default Reviews;
