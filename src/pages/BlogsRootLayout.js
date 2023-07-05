import { Outlet } from 'react-router-dom';
import { Fragment } from 'react';

const RootLayout = () => {
  return (
    <Fragment>
      <Outlet />
    </Fragment>
  );
};

export default RootLayout;
