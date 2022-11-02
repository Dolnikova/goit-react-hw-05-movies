import { fetchMovies } from 'api';
import React, { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Box, InputForm, Item, Link, Poster } from './Movie.style';
import noPoster from '../../images/no_poster.jpg';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState('');
  const location = useLocation();

  const handleChange = e => {
    setQuery(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();

    const newQuery = e.target.elements.query.value.toLowerCase();
    if (newQuery.trim() === '') {
      toast.error('Enter something');
      return;
    }
    setSearchParams({ query: newQuery });
  };

  useEffect(() => {
    if (searchParams.get('query') !== null) {
      const newQuery = searchParams.get('query');
      fetchMovies(newQuery).then(results => {
        results.results.length
          ? setMovies(results.results)
          : toast.error('Enter a valid movie title');
        setQuery('');
      });
    }
  }, [searchParams]);

  return (
    <>
      <ToastContainer />
      <InputForm onSubmit={handleSubmit}>
        <input type="text" name="query" value={query} onChange={handleChange} />
        <button type="submit">Search</button>
      </InputForm>
      {!!movies.length && (
        <Box>
          {movies.map(({ title, id, poster_path }) => {
            return (
              <Item key={id}>
                <Link
                  to={`${id}`}
                  state={{ from: location.pathname + location.search }}
                >
                  <Poster
                    src={
                      poster_path
                        ? `https://image.tmdb.org/t/p/w200/${poster_path}`
                        : noPoster
                    }
                  />
                  {title}
                </Link>
              </Item>
            );
          })}
        </Box>
      )}
    </>
  );
};
export default Movies;
