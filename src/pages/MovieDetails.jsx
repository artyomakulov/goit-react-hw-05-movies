import { useRef } from 'react';
import { Suspense } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

export default function MovieDetails() {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
  const { movieId } = useParams();
  console.log('location', location);

  return (
    <>
      <h1>Movie Details: {movieId}</h1>
      <Link to={backLinkLocationRef.current}>Назад</Link>
      <ul>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
        <li>
          <Link to="cast">Cast</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}
