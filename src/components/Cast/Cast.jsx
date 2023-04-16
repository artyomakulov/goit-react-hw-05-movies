import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import css from './Cast.module.css';

export default function Cast() {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=d0540c3f94b98f357d5d7224e563e83f&language=en-US`
      )
      .then(res => {
        setActors(res.data.cast);
      })
      .catch(error => {
        console.log('error', error);
      });
  }, [movieId]);

  return (
    <>
      <div className={css.ulCast}>
        {actors &&
          actors.map(({ id, profile_path, name, character }) => {
            return (
              <ul key={id}>
                <li>
                  <img
                    src={`https://image.tmdb.org/t/p/w300/${profile_path}`}
                    alt={name}
                    width="150"
                    height="250"
                  />
                </li>
                <p>Name: {name}</p>
                <p>Character: {character}</p>
              </ul>
            );
          })}
      </div>
    </>
  );
}
