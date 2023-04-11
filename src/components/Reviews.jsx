import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Reviews() {
  const [comments, setComments] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=d0540c3f94b98f357d5d7224e563e83f&language=en-US`
      )
      .then(res => {
        if (res.data.results.length > 0) {
          setComments(res.data.results);
        }
        return;
      })
      .catch(error => {
        console.log('error', error);
      });
  }, [movieId]);

  return (
    <>
      {comments ? (
        comments.map(({ author, content, id }) => {
          return (
            <div key={id}>
              <h3>{author}</h3>
              <p>{content}</p>
            </div>
          );
        })
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </>
  );
}
