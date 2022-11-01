import { fetchMovieDetails } from 'api';
import React, { useEffect, useState } from 'react';
import noPoster from '../../images/no_poster.jpg';
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { Button } from './MovieDetails.styled';

const MovieDetails = () => {
  const [details, setDetails] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    fetchMovieDetails(movieId).then(
      ({
        original_title,
        genres,
        overview,
        poster_path,
        release_date,
        vote_average,
      }) => {
        const movieDetails = {
          title: original_title,
          genres: genres,
          overview: overview,
          poster: poster_path,
          releaseDate: release_date,
          vote: vote_average,
        };
        return setDetails(movieDetails);
      }
    );
  }, [movieId, setDetails]);
  const genresInfo =
    details && details.genres.map(genre => genre.name).join(', ');

  return (
    <>
      {details && (
        <>
          <Button
            onClick={() => {
              navigate(location?.state?.from ?? '/');
            }}
          >
            Go back
          </Button>
          <section>
            <img
              src={
                details.poster
                  ? `https://image.tmdb.org/t/p/w500/${details.poster}`
                  : noPoster
              }
              alt={details.title}
            />
            <div>
              <div>
                <h2>{details.title}</h2>
                <h3>Votes: {details.vote}</h3>
              </div>
              <h3>Date of release: {details.releaseDate}</h3>
              <h3>Overwiew:</h3>
              <p>{details.overview}</p>
              <h3>Genres:</h3>
              <p> {genresInfo}</p>
            </div>
            <div>
              <div>
                <p>Additional info</p>
              </div>

              <ul>
                <li>
                  <Link to="cast" state={location.state}>
                    Cast
                  </Link>
                </li>
                <li>
                  <Link to="reviews">Reviews</Link>
                </li>
              </ul>
            </div>
          </section>
        </>
      )}
      <Outlet />
    </>
  );
};
export default MovieDetails;
