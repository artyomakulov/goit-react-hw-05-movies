import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import css from './Layout.module.css';

export default function Layout() {
  return (
    <div>
      <div className={css.layoutHeader}>
        <ul className={css.ulLayout}>
          <li>
            <NavLink to="/" className={css.aLayout}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies" className={css.aLayout}>
              Movies
            </NavLink>
          </li>
        </ul>
      </div>

      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
}
