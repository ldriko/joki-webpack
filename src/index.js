import './style.css';
import 'iconify-icon';
import { initNowPlaying } from './repository/now-playing.js';
import { initGenres } from './repository/genre.js';
import { refreshRecommendation } from './repository/recommendation.js';
import { MovieCard } from './elements/movie-card.js';

customElements.define('movie-card', MovieCard);

(() => {
  initNowPlaying();
  initGenres({
    onGenreChanges: refreshRecommendation
  });
})();
