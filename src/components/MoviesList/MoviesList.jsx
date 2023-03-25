import { Link, useLocation } from 'react-router-dom';
import css from '../MoviesList/MoviesList.module.css';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <div>
      {movies.map(movie => (
        <li className={css.MovieList} key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            <p>{movie.title}</p>
          </Link>
        </li>
      ))}
    </div>
  );
};
