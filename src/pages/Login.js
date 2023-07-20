import { Link, Form, json, useActionData } from 'react-router-dom';

import { useEffect, useRef } from 'react';

import classes from './Login.module.css';

const LoginPage = () => {
  const data = useActionData();
  const userRef = useRef();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  return (
    <>
      {/* {success ? (
        <Navigate to='/'></Navigate>
      ) : ( */}
      <div className={classes['login-container']}>
        <h1 className={classes.login}>LOGIN</h1>
        <Form method='post'>
          <input
            type='text'
            id='username'
            name='username'
            placeholder='Username'
            ref={userRef}
            className={classes['login-input']}
          />

          <input
            type='text'
            id='password'
            placeholder='Password'
            name='password'
            // onChange={(event) =>
            //   inputChangeHandler('password', event.target.value)
            // }
            className={classes['login-input']}
          />

          <button type='submit' className={classes['btn-login']}>
            Login
          </button>
          <p>This is an error</p>
          <span className={classes.register}>
            Don't have an account? <br />
            <Link to='/signup'>Register</Link>
          </span>
        </Form>
      </div>
    </>
  );
};

export default LoginPage;

export const loginAction = async ({ request }) => {
  try {
    const data = await request.formData();

    const loginData = {
      username: data.get('username'),
      password: data.get('password'),
    };

    const response = await fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(loginData),
    });

    const { username, password } = loginData;

    if (!response.ok) {
      throw json({ message: 'Could not login' }, { status: 500 });
    }

    const responseData = await response.json();

    console.log(responseData);
  } catch (err) {
    console.log('Error:', err);
    // Handle the error as needed
  }
};
