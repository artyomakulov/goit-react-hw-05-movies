import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
      <h1>TOP 20 Movies</h1>
      <ul>
        {homeMovies.map(data => {
          return (
            <li key={data.id}>
              <Link to={`movies/${data.id}`}>{data.title || data.name}</Link>
              <p>
                Release Date:{' '}
                <span>{data.release_date ? data.release_date : 'No date'}</span>
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
