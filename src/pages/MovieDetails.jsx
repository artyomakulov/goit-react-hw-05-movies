import { Link, Outlet, useParams } from 'react-router-dom';

export default function MovieDetails() {
  const { movieId } = useParams();
  console.log('movieId', movieId);
  return (
    <>
      <h1>Movie Details: {movieId}</h1>
      <ul>
        <li>
          <Link to="get-movie-reviews">Reviews</Link>
        </li>
        <li>
          <Link to="get-movie-credits">Cast</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}
