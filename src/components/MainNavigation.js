import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

import classes from './MainNavigation.module.scss';

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
            onClick={() => {
              setMenuOpen(false);
            }}
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
            onClick={() => {
              setMenuOpen(false);
            }}
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
            onClick={() => {
              setMenuOpen(false);
            }}
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
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink to='/write' onClick={() => setMenuOpen(false)}>
            WRITE
          </NavLink>
        </li>
        <li>John</li>
        <li>
          <NavLink>Logout</NavLink>
        </li>
        {/* <NavLink
          to='/login'
          onClick={() => {
            setMenuOpen(false);
          }}
        >
          <button }>MEMBER LOGIN</button>
        </NavLink> */}
        {/* <NavLink
          to='/signup'
          onClick={() => {
            setMenuOpen(false);
          }}
        >
          <button }>BECOME A MEMBER</button>
        </NavLink> */}
      </ul>
    </nav>
  );
};

export default MainNavigation;
