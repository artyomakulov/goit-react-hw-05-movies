import { useState, useEffect } from 'react';

import axios from 'axios';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

export default function Movies() {
  const [searchFilm, setSearchFilm] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  console.log('searchParams', searchParams);

  const updateQueryString = evt => {
    const movieIdValue = evt.target.value;
    if (movieIdValue === '') {
      return setSearchParams({});
    }
    setSearchParams({ movieId: movieIdValue });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setInputValue(e.currentTarget.value);
    setSearchFilm(true);
    e.target.reset();
  };

  useEffect(() => {
    if (inputValue === '') {
      return;
    }
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=d0540c3f94b98f357d5d7224e563e83f&query=${inputValue}`
      )
      .then(res => {
        setSearchFilm(res.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, [inputValue]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Please enter film name"
          onChange={updateQueryString}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {searchFilm.length > 0
          ? searchFilm.map(
              ({ release_date, original_title, id, poster_path }) => {
                return (
                  <ul key={id}>
                    <li>
                      <Link to={`/movies/${id}`} state={{ from: location }}>
                        {original_title}
                        <div>
                          <img
                            src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
                            alt={original_title}
                            width="300"
                            height="400"
                          />
                        </div>
                      </Link>
                      <p>
                        Release Date:
                        <span> {release_date ? release_date : 'No date'}</span>
                      </p>
                    </li>
                  </ul>
                );
              }
            )
          : null}
      </ul>
    </>
  );
}
