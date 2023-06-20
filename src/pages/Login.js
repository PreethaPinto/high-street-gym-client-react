import { Link } from 'react-router-dom';

import classes from './Login.module.css';

const LoginPage = () => {
  const submitHandler = () => {};

  return (
    <div className={classes['login-container']}>
      <form onSubmit={submitHandler} className={classes['login-form']}>
        <h3 className={classes.login}>LOGIN</h3>
        <div className={classes['login-inputbox']}>
          {/* <label htmlFor='username'>Username</label> */}
          <input
            type='text'
            placeholder='Username'
            className={classes['login-input']}
          />
        </div>
        <div className={classes['login-inputbox']}>
          {/* <label htmlFor='password'>Password</label> */}
          <input
            type='text'
            placeholder='Password'
            className={classes['login-input']}
          />
        </div>
        <button type='submit' className={classes['btn-login']}>
          Login
        </button>
        <p className={classes.register}>
          Don't have an account? <Link to='/signup'>Register</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
