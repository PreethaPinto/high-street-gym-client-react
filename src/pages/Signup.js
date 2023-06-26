import { useState } from 'react';

import classes from './Signup.module.css';

const SignupPage = () => {
  const [enteredInput, setEnteredInput] = useState({
    enteredFirstName: '',
    enteredLastName: '',
    enteredPhone: 0,
    enteredEmail: '',
    enteredUsername: '',
    enteredPassword: '',
  });

  const submitHandler = (event) => {
    event.preventDefault();

    const signupData = enteredInput;
    console.log(signupData);
  };

  const inputChangeHandler = (input, value) => {
    if (input === 'first-name') {
      setEnteredInput({
        ...enteredInput,
        enteredFirstName: value,
      });
    } else if (input === 'last-name') {
      setEnteredInput({
        ...enteredInput,
        enteredLastName: value,
      });
    } else if (input === 'phone') {
      setEnteredInput({
        ...enteredInput,
        enteredPhone: value,
      });
    } else if (input === 'email') {
      setEnteredInput({
        ...enteredInput,
        enteredEmail: value,
      });
    } else if (input === 'username') {
      setEnteredInput({
        ...enteredInput,
        enteredUsername: value,
      });
    } else if (input === 'password') {
      setEnteredInput({
        ...enteredInput,
        enteredPassword: value,
      });
    }
  };

  return (
    <div className={classes['signup-container']}>
      <form onSubmit={submitHandler} className={classes['signup-form']}>
        <h3 className={classes.signup}>SIGN UP</h3>
        <div className={classes['signup-input']}>
          <input
            onChange={(event) =>
              inputChangeHandler('first-name', event.target.value)
            }
            id='first-name'
            type='text'
            placeholder='First Name'
            className={classes['signup-input']}
          />
          <input
            onChange={(event) =>
              inputChangeHandler('last-name', event.target.value)
            }
            id='last-name'
            type='text'
            placeholder='Last Name'
            className={classes['signup-input']}
          />
        </div>
        <div className={classes['signup-input']}>
          <input
            onChange={(event) =>
              inputChangeHandler('phone', event.target.value)
            }
            id='phone'
            type='number'
            placeholder='Phone'
            className={classes['signup-input']}
          />
          <input
            onChange={(event) =>
              inputChangeHandler('email', event.target.value)
            }
            id='email'
            type='text'
            placeholder='Email'
            className={classes['signup-input']}
          />
        </div>
        <div className={classes['signup-input']}>
          <input
            onChange={(event) =>
              inputChangeHandler('username', event.target.value)
            }
            id='username'
            type='text'
            placeholder='Username'
            className={classes['signup-input']}
          />
          <input
            onChange={(event) =>
              inputChangeHandler('password', event.target.value)
            }
            id='password'
            type='text'
            placeholder='Password'
            className={classes['signup-input']}
          />
        </div>
        <button type='submit' className={classes['btn-signup']}>
          Sign Up
        </button>
      </form>
      <p>Already a member? </p>
    </div>
  );
};

export default SignupPage;
