import dayjs from 'dayjs';

export class MovieCard extends HTMLElement {
  active = false;

  constructor() {
    super();
    this.addEventListener('click', this.toggleActive);
  }

  toggleActive() {
    this.active = !this.active;
    const card = this.querySelector('div');
    const overviewContainer = this.querySelector('.overview-container');
    const detailsContainer = this.querySelector('.details-container');

    if (this.active) {
      card.classList.remove('w-movie-card');
      card.classList.add(
        'w-movie-card-opened',
        'border',
        'shadow-sm',
        'bg-white'
      );
      overviewContainer.classList.remove('hidden');
      detailsContainer.classList.add('px-4', 'pb-4');
    } else {
      card.classList.remove(
        'w-movie-card-opened',
        'border',
        'shadow-sm',
        'bg-white'
      );
      card.classList.add('w-movie-card');
      overviewContainer.classList.add('hidden');
      detailsContainer.classList.remove('px-4', 'pb-4');
    }
  }

  connectedCallback() {
    const card = document.createElement('div');
    card.classList.add('w-movie-card', 'cursor-pointer', 'transition-all');

    const posterContainer = document.createElement('div');
    posterContainer.classList.add('flex', 'mb-4', 'h-movie-card');

    const poster = document.createElement('img');
    poster.src =
      'https://image.tmdb.org/t/p/w300' + this.getAttribute('poster');
    poster.alt = this.getAttribute('title');
    poster.setAttribute('loading', 'lazy');

    posterContainer.appendChild(poster);

    const overviewContainer = document.createElement('div');
    overviewContainer.classList.add(
      'overview-container',
      'hidden',
      'px-6',
      'py-4',
      'border-b',
      'border-dashed',
      'w-full'
    );

    const overviewTitle = document.createElement('div');
    overviewTitle.classList.add('font-semibold', 'mb-2');
    overviewTitle.innerText = 'Overview';

    const overview = document.createElement('div');
    overview.innerText = this.getAttribute('overview');

    overviewContainer.appendChild(overviewTitle);
    overviewContainer.appendChild(overview);

    posterContainer.appendChild(overviewContainer);

    const detailsContainer = document.createElement('div');
    detailsContainer.classList.add('details-container', 'flex', 'gap-2');

    const leftDetails = document.createElement('div');
    leftDetails.classList.add('grow');
    const rightDetails = document.createElement('div');

    const title = document.createElement('div');
    title.classList.add('text-xl', 'font-bold', 'mb-2');
    title.innerText = this.getAttribute('title');

    const releaseDate = document.createElement('div');
    releaseDate.classList.add('text-sm', 'text-gray-500', 'font-semibold');
    releaseDate.innerText = dayjs(this.getAttribute('release-date')).format(
      'MMM YYYY'
    );

    leftDetails.appendChild(title);
    leftDetails.appendChild(releaseDate);
    detailsContainer.appendChild(leftDetails);

    const vote = document.createElement('div');
    vote.classList.add(
      'bg-yellow-100',
      'text-yellow-700',
      'border',
      'border-yellow-200',
      'rounded-full',
      'w-20',
      'pl-2',
      'py-2',
      'mb-4',
      'flex',
      'items-center',
      'justify-center',
      'text-sm',
      'font-bold',
      'gap-1',
      'shrink-0'
    );
    vote.innerHTML = this.getAttribute('vote');

    const star = document.createElement('iconify-icon');
    star.setAttribute('icon', 'fluent:star-20-filled');

    vote.appendChild(star);
    rightDetails.appendChild(vote);
    detailsContainer.appendChild(rightDetails);

    card.appendChild(posterContainer);
    card.appendChild(detailsContainer);

    this.appendChild(card);
  }
}
