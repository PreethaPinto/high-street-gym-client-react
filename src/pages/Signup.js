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
    const {
      enteredFirstName: firstName,
      enteredLastName: lastName,
      enteredPhone: phone,
      enteredEmail: email,
      enteredUsername: username,
      enteredPassword: password,
    } = signupData;

    setEnteredInput({
      enteredFirstName: '',
      enteredLastName: '',
      enteredPhone: 0,
      enteredEmail: '',
      enteredUsername: '',
      enteredPassword: '',
    });
  };

  const inputChangeHandler = (input, value) => {
    if (input === 'first-name') {
      setEnteredInput((prevState) => {
        return {
          ...prevState,
          enteredFirstName: value,
        };
      });
    } else if (input === 'last-name') {
      setEnteredInput((prevState) => {
        return {
          ...prevState,
          enteredLastName: value,
        };
      });
    } else if (input === 'phone') {
      setEnteredInput((prevState) => {
        return {
          ...prevState,
          enteredPhone: value,
        };
      });
    } else if (input === 'email') {
      setEnteredInput((prevState) => {
        return {
          ...prevState,
          enteredEmail: value,
        };
      });
    } else if (input === 'username') {
      setEnteredInput((prevState) => {
        return {
          ...prevState,
          enteredUsername: value,
        };
      });
    } else if (input === 'password') {
      setEnteredInput((prevState) => {
        return {
          ...prevState,
          enteredPassword: value,
        };
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
            value={enteredInput.enteredFirstName}
            id='first-name'
            type='text'
            placeholder='First Name'
            className={classes['signup-input']}
          />
          <input
            onChange={(event) =>
              inputChangeHandler('last-name', event.target.value)
            }
            value={enteredInput.enteredLastName}
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
            value={enteredInput.enteredPhone}
            id='phone'
            type='number'
            placeholder='Phone'
            className={classes['signup-input']}
          />
          <input
            onChange={(event) =>
              inputChangeHandler('email', event.target.value)
            }
            value={enteredInput.enteredEmail}
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
            value={enteredInput.enteredUsername}
            id='username'
            type='text'
            placeholder='Username'
            className={classes['signup-input']}
          />
          <input
            onChange={(event) =>
              inputChangeHandler('password', event.target.value)
            }
            value={enteredInput.enteredPassword}
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
