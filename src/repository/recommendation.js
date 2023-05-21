import { apiFetch } from '../api-fetch.js';

const recommendation = document.querySelector('#recommendation');
const page = 1;

const getRecommendation = async (page, genres = []) => {
  let params = '';

  if (genres.length) {
    params = `&with_genres=${genres.join(',')}`;
  }

  const response = await apiFetch(`/discover/movie?page=${page}${params}`);
  const { results } = await response.json();

  return results;
};

export const refreshRecommendation = async (genres = []) => {
  const movies = await getRecommendation(page, genres);
  recommendation.innerHTML = '';

  movies.forEach((movie) => {
    const movieCard = document.createElement('movie-card');

    movieCard.setAttribute('id', movie.id);
    movieCard.setAttribute('title', movie.title);
    movieCard.setAttribute('poster', movie.poster_path);
    movieCard.setAttribute('release-date', movie.release_date);
    movieCard.setAttribute('overview', movie.overview);
    movieCard.setAttribute('vote', movie.vote_average);

    recommendation.appendChild(movieCard);
  });
};
