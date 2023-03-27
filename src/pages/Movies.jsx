import { Link } from 'react-router-dom';

export default function Movies() {
  return (
    <div>
      Movies list mthfcker{' '}
      {['movie-1', 'movie-2', 'movie-3'].map(movie => {
        return <Link key={movie} to={`${movie}`}>{movie}</Link>;
      })}
    </div>
  );
}
