import { useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

export default function Movies() {
  const [movies, setMovies] = useState([
    'movie-1',
    'movie-2',
    'movie-3',
    'movie-4',
    'movie-5',
  ]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const movieId = searchParams.get('movieId') ?? '';
  // console.log('searchParams', searchParams.get('a'))

  const updateQueryString = evt => {
    const movieIdValue = evt.target.value;
    if (movieIdValue === '') {
      return setSearchParams({});
    }
    setSearchParams({ movieId: movieIdValue });
  };

  const visibleMovies = movies.filter(movie => movie.includes(movieId));

  console.log('location', location);

  return (
    <div>
      <input type="text" value={movieId} onChange={updateQueryString} />
      {/* <button onClick={() => setSearchParams({ c: 'hola' })}>Change sp</button> */}
      Movies list mthfcker
      <ul>
        {visibleMovies.map(movie => {
          return (
            <li key={movie}>
              <Link to={`${movie}`} state={{ from: location }}>
                {movie}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
