import { Link, useRouteError } from 'react-router-dom';

import classes from './Error.module.scss';

import MainNavigation from '../components/MainNavigation';
const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  let title = 'An error occured!';
  let message = 'Something went wrong!';

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = 'Not found!';
    message = 'Could not find resource or page.';
  }

  return (
    <>
      <MainNavigation />
      <main className={classes.error}>
        <h1>{title}</h1>
        <p>{message}</p>
        <button>
          <Link to='/' className={classes.return}>
            Return to Home
          </Link>
        </button>
      </main>
    </>
  );
};

export default ErrorPage;
