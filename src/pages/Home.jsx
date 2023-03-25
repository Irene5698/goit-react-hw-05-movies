import { getTrandingMovies } from 'api';
import { useEffect, useState } from 'react';
import { MoviesList } from 'components/MoviesList/MoviesList';
import css from '../pages/Home.module.css'
import PropTypes from 'prop-types';

const useTranding = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);


  useEffect(() => {
    getTrandingMovies().then(setTrendingMovies);
  }, []);

  return (
    <>
      <h2 className={css.TrendingMovies}>Trending movies</h2>
<MoviesList movies={trendingMovies} />
    </>
  );
};

export default useTranding;


useTranding.propTypes = {
  trendingMovies: PropTypes.array,
}