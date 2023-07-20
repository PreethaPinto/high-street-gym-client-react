import classes from './Home.module.scss';

const HomePage = () => {
  return (
    <div className={classes['home-wrapper']}>
      <h1>HOME PAGE</h1>
      <p>Welcome to High Street Gym</p>
    </div>
  );
};

export default HomePage;
