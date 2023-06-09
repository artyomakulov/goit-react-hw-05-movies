import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import css from './Movies.module.css';

export default function Movies() {
  const [searchFilm, setSearchFilm] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const [inputValue, setInputValue] = useState(searchParams.get('query') ?? '');
  const location = useLocation();

  console.log('searchParams', searchParams);
  const query = searchParams.get('query') ?? '';

  const updateQueryString = evt => {
    setInputValue(evt.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (inputValue === '') {
      return alert('sorry, but you should write smthng');
    }
    setSearchParams({ query: inputValue });
    e.target.reset();
  };

  useEffect(() => {
    if (query === '') {
      return;
    }
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=d0540c3f94b98f357d5d7224e563e83f&query=${query}`
      )
      .then(res => {
        setSearchFilm(res.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, [query]);

  return (
    <>
      <div className={css.searchForm}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            placeholder="Please enter film name"
            onChange={updateQueryString}
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <div>
        <ul className={css.ulMovies}>
          {searchFilm.length > 0
            ? searchFilm.map(
                ({ release_date, original_title, id, poster_path }) => {
                  return (
                    <ul key={id}>
                      <li className={css.liMovies}>
                        <Link
                          className={css.aMovies}
                          to={`/movies/${id}`}
                          state={{ from: location }}
                        >
                          {original_title}
                        </Link>
                        <div>
                          {poster_path ? (
                            <img
                              src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
                              alt={original_title}
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
                        <p className={css.releaseMovies}>
                          Release Date:
                          <span>
                            {' '}
                            {release_date ? release_date : 'No date'}
                          </span>
                        </p>
                      </li>
                    </ul>
                  );
                }
              )
            : null}
        </ul>
      </div>
    </>
  );
}
