import { Form, Link } from 'react-router-dom';

import { useState, useEffect, useRef } from 'react';

import classes from './Login.module.css';

const LoginPage = (props) => {
  const nameInputRef = useRef();
  const passwordInputRef = useRef();

  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();

    console.log(event.target.value);
  };

  return (
    <div className={classes['login-container']}>
      <Form
        method='post'
        onSubmit={submitHandler}
        className={classes['login-form']}
      >
        <h3 className={classes.login}>LOGIN</h3>
        <div className={classes['login-inputbox']}>
          {/* <label htmlFor='username'>Username</label> */}
          <input
            type='text'
            id='username'
            ref={nameInputRef}
            placeholder='Username'
            className={classes['login-input']}
          />
        </div>
        <div className={classes['login-inputbox']}>
          {/* <label htmlFor='password'>Password</label> */}
          <input
            type='text'
            id='password'
            ref={passwordInputRef}
            placeholder='Password'
            className={classes['login-input']}
          />
        </div>
        <button type='submit' className={classes['btn-login']}>
          Login
        </button>
        <p className={classes.register}>
          Don't have an account? <Link to='signup'>Register</Link>
        </p>
      </Form>
    </div>
  );
};

export default LoginPage;
