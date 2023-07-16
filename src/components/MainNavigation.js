import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';
import NewsletterPage from '../../src/pages/Newsletter';

const MainNavigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to='/' className={classes.logo}>
        <h2 className={classes['logo-name']}>HIGH STREET GYM</h2>
        <h2 className={classes['logo-initials']}>HSG</h2>
      </Link>
      <div
        className={classes.burger}
        onClick={() => {
          console.log('Clicked');
          setMenuOpen(!menuOpen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? classes.open : ''}>
        <li>
          <NavLink
            to='/classes'
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            CLASSES
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/trainers'
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            TRAINERS
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/blogs'
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            BLOG
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/about'
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            ABOUT
          </NavLink>
        </li>
        <NavLink to='/login'>
          <button className={classes['btn-header']}>MEMBER LOGIN</button>
        </NavLink>
        <NavLink to='/signup'>
          <button className={classes['btn-header']}>BECOME A MEMBER</button>
        </NavLink>
      </ul>

      {/* <NewsletterPage /> */}
    </nav>
  );
};

export default MainNavigation;
