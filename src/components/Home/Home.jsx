import { fetchTrending } from 'api';
import { Link } from 'components/Movies/Movie.style';
import { useEffect, useState } from 'react';
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
            <Link to={`movies/${id}`}>
              <Poster src={`https://image.tmdb.org/t/p/w500/${poster_path}`} />
              {title}
            </Link>
          </Item>
        ))}
      </Box>
    </Main>
  );
};
export default Home;
