import Newsletter from './Newsletter';

import classes from './Home.module.scss';

const HomePage = () => {
  return (
    <>
      <div className={classes['home-wrapper']}>
        <Newsletter />
      </div>
      <div className={classes.welcome}>
        <h1>WELCOME TO HIGH STREET GYM</h1>
        <p>TRANSFORM YOUR BODY, ELEVATE YOUR MIND -</p>
        <p> UNLEASH YOUR PONTENTIAL AT OUR GYM</p>
      </div>
    </>
  );
};

export default HomePage;
