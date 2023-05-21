const apiKey =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNmExZDZjY2YxZjViNzFjNDgxM2E3YmQwNTNmZmI5OSIsInN1YiI6IjY0Njk4NTY1YTUwNDZlMDE0NzRkMmQzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-2hqc7JS6HsghLNny45pYtJKr8T3p_hfW3fcdqzSjyk';

export const apiFetch = (endpoint) => {
  const url = `https://api.themoviedb.org/3${endpoint}`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${apiKey}`
    }
  };

  return fetch(url, options);
};
