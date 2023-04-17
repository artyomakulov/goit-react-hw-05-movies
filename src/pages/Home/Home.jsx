import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import css from './Home.module.css';

export default function Home() {
  const [homeMovies, setHomeMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=d0540c3f94b98f357d5d7224e563e83f`
      )
      .then(res => {
        setHomeMovies(res.data.results);
      });
  }, []);

  return (
    <div>
      <h1 className={css.h1Home}>TOP 20 Movies</h1>
      <ul className={css.ulHome}>
        {homeMovies.map(({ id, title, name, release_date, poster_path }) => {
          return (
            <>
              <div>
                <li key={id} className={css.liHome}>
                  <Link to={`movies/${id}`} className={css.aHome}>
                    {title || name}
                  </Link>
                  <div>
                    {poster_path ? (
                      <img
                        src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
                        alt={title}
                        height="300"
                      />
                    ) : (
                      <img
                        src={`https://img10.joyreactor.cc/pics/post/anon-5573344.png`}
                        alt="not found"
                        width="200"
                        height="300"
                      />
                    )}
                  </div>
                  <p className={css.releaseHome}>
                    Release Date:
                    <span>{release_date ? release_date : 'No date'}</span>
                  </p>
                </li>
              </div>
            </>
          );
        })}
      </ul>
    </div>
  );
}
