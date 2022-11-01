import { fetchMovieCast } from 'api';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import noActor from '../../images/icon-actor.png';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    fetchMovieCast(movieId).then(r => {
      const mappedActors = [];
      r.cast.map(({ id, original_name, profile_path }) => {
        const actor = {
          id: id,
          name: original_name,
          photo: profile_path,
        };
        return mappedActors.push(actor);
      });
      setCast(mappedActors);
    });
  }, [movieId]);

  return cast && cast.length > 0 ? (
    <>
      <ul>
        {cast.map(({ id, name, photo }) => (
          <li key={id}>
            {photo ? (
              <img
                src={`https://image.tmdb.org/t/p/w300/${photo}`}
                alt={name}
              />
            ) : (
              <img src={noActor} alt={name} width={300} height={450} />
            )}
          </li>
        ))}
      </ul>
    </>
  ) : (
    <p>Sorry, we have no information here</p>
  );
};
export default Cast;
