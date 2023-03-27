import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';
import Layout from './Layout';
import Cast from './Cast';
import Reviews from './Reviews';

export const App = () => {
  return (
    // style={{
    //   height: '100vh',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   fontSize: 40,
    //   color: '#010101',
    // }}
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="get-movie-reviews" element={<Reviews />} />
          <Route path="get-movie-credits" element={<Cast />} />
        </Route>
      </Route>
    </Routes>
  );
};
