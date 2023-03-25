import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';
import { NavLink } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <div className={css.Container}>
      <header className={css.Header}>
        <nav className={css.Navigation}>
          <NavLink to="/" end className={css.NavLink}>
            Home
          </NavLink>
          <NavLink to="/movies" className={css.NavLink}>
            Movies
          </NavLink>
        </nav>
      </header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
