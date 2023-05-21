import { apiFetch } from '../api-fetch.js';

let actives = [];
let changesTimeout = null;

const getGenres = async () => {
  const response = await apiFetch('/genre/movie/list');
  const { genres } = await response.json();
  return genres;
};

const handleClick = (genreId) => {
  const el = document.querySelector(`[data-id="${genreId}"]`);

  if (actives.includes(genreId)) {
    actives = actives.filter((id) => id !== genreId);
    el.classList.add('bg-white', 'hover:bg-secondary');
    el.classList.remove('text-white', 'bg-primary', 'hover:bg-primary');
  } else {
    actives.push(genreId);
    el.classList.add('text-white', 'bg-primary', 'hover:bg-primary');
    el.classList.remove('bg-white', 'hover:bg-secondary');
  }
};

export const initGenres = async ({ onGenreChanges = null } = {}) => {
  const genres = await getGenres();
  const genreList = document.getElementById('genres');

  genres.forEach((genre) => {
    const genreItem = document.createElement('div');
    genreItem.classList.add(
      'p-3',
      'bg-white',
      'border',
      'font-medium',
      'cursor-pointer',
      'transition',
      'hover:bg-secondary',
      'hover:text-white'
    );
    genreItem.innerText = genre.name;
    genreItem.setAttribute('data-id', genre.id);
    genreItem.setAttribute('data-active', 0);

    genreItem.addEventListener('click', () => {
      handleClick(genre.id);
      if (onGenreChanges) {
        clearTimeout(changesTimeout);
        changesTimeout = setTimeout(() => {
          onGenreChanges(actives);
        }, 1000);
      }
    });

    genreList.appendChild(genreItem);
  });

  handleClick(genres[0].id);
  onGenreChanges(actives);
};
