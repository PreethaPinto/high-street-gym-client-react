import { NavLink, Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';
import Newsletter from '../../src/pages/Newsletter';

const MainNavigation = () => {
  return (
    <div>
      <div className={classes.header}>
        <div>
          <Link to='/' className={classes.logo}>
            <h2>HIGH STREET GYM</h2>
          </Link>
        </div>
        <div className={classes.menu}>
          <ul className={classes.list}>
            <NavLink
              to='/classes'
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              <li>CLASSES</li>
            </NavLink>
            <NavLink
              to='/trainers'
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              <li>TRAINERS</li>
            </NavLink>
            <NavLink
              to='/blog'
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              <li>BLOG</li>
            </NavLink>
            <NavLink
              to='/about'
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              <li>ABOUT</li>
            </NavLink>
            <NavLink to='/login'>
              <button className={classes['btn-header']}>MEMBER LOGIN</button>
            </NavLink>
            <NavLink to='/signup'>
              <button className={classes['btn-header']}>BECOME A MEMBER</button>
            </NavLink>
          </ul>
        </div>
      </div>

      <Newsletter />
    </div>
  );
};

export default MainNavigation;
