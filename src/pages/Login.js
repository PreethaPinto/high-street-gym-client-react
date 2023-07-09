import { Link, Navigate, Form, json, redirect } from 'react-router-dom';

import { useState, useEffect, useRef } from 'react';

import classes from './Login.module.css';

const LoginPage = (props) => {
  const userRef = useRef();

  // const [formValues, setFormValues] = useState({ username: '', password: '' });
  // const [formErrors, setFormErrors] = useState({});

  //const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  // const submitHandler = (event) => {
  //   event.preventDefault();
  //   setFormErrors(validateForm(formValues));

  //   //setSuccess(true);
  // };

  // const inputChangeHandler = (event) => {
  //   const { id, value } = event.target;
  //   setFormValues({ ...formValues, [id]: value });
  // };

  // const validateForm = (values) => {
  //   let errors = {};

  //   if (!values.username) {
  //     errors.username = 'Username is required!';
  //   }

  //   if (!values.password) {
  //     errors.password = 'Password required!';
  //   }
  //   return errors;
  // };

  return (
    <>
      {/* {success ? (
        <Navigate to='/'></Navigate>
      ) : ( */}
      <section>
        <div className={classes['login-container']}>
          <div className={classes['login-form']}>
            <h3 className={classes.login}>LOGIN</h3>

            <Form method='post'>
              <div className={classes['login-inputbox']}>
                <label htmlFor='username'>Username</label>
                <input
                  type='text'
                  id='username'
                  ref={userRef}
                  className={classes['login-input']}
                />
                {/* {formErrors.username && (
                  <p style={{ color: 'red' }}>{formErrors.username}</p>
                )} */}
              </div>

              <div className={classes['login-inputbox']}>
                <label htmlFor='password'>Password</label>
                <input
                  type='text'
                  id='password'
                  // onChange={(event) =>
                  //   inputChangeHandler('password', event.target.value)
                  // }
                  className={classes['login-input']}
                />
                {/* {formErrors.password && (
                  <p style={{ color: 'red' }}>{formErrors.password}</p>
                )} */}
              </div>

              <button type='submit' className={classes['btn-login']}>
                Login
              </button>
              <p className={classes.register}>
                Don't have an account? <Link to='/signup'>Register</Link>
              </p>
            </Form>
          </div>
        </div>
      </section>
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
