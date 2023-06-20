import { Outlet } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';
import { Fragment } from 'react';

const RootLayout = () => {
  return (
    <Fragment>
      <MainNavigation />
      <Outlet />
    </Fragment>
  );
};

export default RootLayout;
