import { apiFetch } from '../api-fetch.js';

const nowPlaying = document.querySelector('#now-playing');

const getNowPlaying = async () => {
  const response = await apiFetch('/movie/now_playing?sort_by=popularity.desc');
  const { results } = await response.json();
  return results;
};

export const initNowPlaying = async () => {
  const movies = await getNowPlaying();
  nowPlaying.innerHTML = '';

  movies.forEach((movie) => {
    const movieCard = document.createElement('movie-card');

    movieCard.setAttribute('id', movie.id);
    movieCard.setAttribute('title', movie.title);
    movieCard.setAttribute('poster', movie.poster_path);
    movieCard.setAttribute('release-date', movie.release_date);
    movieCard.setAttribute('overview', movie.overview);
    movieCard.setAttribute('vote', movie.vote_average);

    nowPlaying.appendChild(movieCard);
  });
};
