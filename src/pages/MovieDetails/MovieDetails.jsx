import { useRef } from 'react';
import { Suspense, useState, useEffect } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import css from './MovieDetails.module.css';

export default function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState({
    id: 0,
    title: '',
    average: 0,
    img: '',
    overview: '',
    genres: [],
  });
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
  const { movieId } = useParams();
  console.log('location', location);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=d0540c3f94b98f357d5d7224e563e83f`
      )
      .then(res => {
        setMovieDetails({
          id: res.data.id,
          title: res.data.original_title,
          average: res.data.vote_average,
          img: res.data.poster_path,
          overview: res.data.overview,
          genres: res.data.genres,
        });
      });
  }, [movieId]);
  const { title, img, average, overview, genres } = movieDetails;

  return (
    <>
      <div className={css.movieBox}>
        <h1>{title}</h1>
        <div>
          <button className={css.btnBack}>
            <Link to={backLinkLocationRef.current}>Back</Link>
          </button>
        </div>
        <div>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w300/${img}`}
              alt={title}
              height="400"
            />
          </div>
          <div>
            <p>User score: {average}</p>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h2>Genres</h2>
            <ul>
              {genres &&
                genres.map(({ id, name }) => {
                  return (
                    <p key={id} className={css.ulMovieDetails}>
                      {name}
                    </p>
                  );
                })}
            </ul>
          </div>
        </div>
        <div>
          <ul>
            <li>
              <Link to="reviews" className={css.liLinks}>
                Reviews
              </Link>
            </li>
            <li>
              <Link to="cast" className={css.liLinks}>
                Cast
              </Link>
            </li>
          </ul>
        </div>{' '}
        <Suspense fallback={<div>Loading subpage...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
}
