import { Outlet } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';
import Footer from '../components/Footer';
import { Fragment } from 'react';

const RootLayout = () => {
  return (
    <Fragment>
      <MainNavigation />
      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default RootLayout;
