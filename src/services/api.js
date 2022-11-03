import axios from 'axios';
const URL = 'https://api.themoviedb.org/3';
const API_KEY = '56d57795c18f8ce36a604725e208eb01';

export const fetchMovies = async (query, page) => {
  const moviesURL = `${URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`;
  return await axios.get(`${moviesURL}`).then(response => response.data);
};
export const fetchTrending = async () => {
  const trendingURL = `${URL}/trending/movie/day?api_key=${API_KEY}&page=${1}`;
  return await axios.get(`${trendingURL}`).then(response => response.data);
};
export const fetchMovieDetails = async movieId => {
  const movieDetailsURL = `${URL}/movie/${movieId}?api_key=${API_KEY}`;
  return await axios.get(`${movieDetailsURL}`).then(response => response.data);
};
export const fetchMovieCast = async movieId => {
  const movieCastURL = `${URL}/movie/${movieId}/credits?api_key=${API_KEY}`;
  return await axios.get(`${movieCastURL}`).then(response => response.data);
};
export const fetchMoviesReviews = async movieId => {
  const movieReviewsURL = `${URL}/movie/${movieId}/reviews?api_key=${API_KEY}`;
  return await axios.get(`${movieReviewsURL}`).then(response => response.data);
};
