import Newsletter from './Newsletter';

import classes from './Home.module.scss';

const HomePage = () => {
  return (
    <>
      <div className={classes['home-wrapper']}>
        <Newsletter />
      </div>
      <div className={classes.welcome}>
        <h2>Welcome to</h2>
        <h1>HIGH STREET GYM</h1>
      </div>
    </>
  );
};

export default HomePage;
