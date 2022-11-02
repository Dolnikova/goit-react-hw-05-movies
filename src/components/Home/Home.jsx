import { fetchTrending } from 'api';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Item, Main, Poster, Title } from './Home.style';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrending().then(movies => {
      setMovies(movies.results);
    });
  }, []);
  return (
    <Main>
      <Title>Trending today</Title>
      <Box>
        {movies.map(({ title, id, poster_path }) => (
          <Item key={id}>
            <Poster
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            ></Poster>
            <Link to={`movies/${id}`}>{title}</Link>
          </Item>
        ))}
      </Box>
    </Main>
  );
};
export default Home;
