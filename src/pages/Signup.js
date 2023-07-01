import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import classes from './Signup.module.css';

const SignupPage = () => {
  const firstNameRef = useRef();

  useEffect(() => {
    firstNameRef.current.focus();
  }, []);

  const initialValues = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    username: '',
    password: '',
    password2: '',
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    setFormErrors(validateForm(formValues));
    // setIsSubmitted(true);
  };

  const inputChangeHandler = (event) => {
    const { id, value } = event.target;
    console.log(id, value);
    setFormValues({ ...formValues, [id]: value });
  };

  const validateForm = (values) => {
    let errors = {};

    const emailRegex = /^[a-zA-Z][a-zA-z0-9-_]{3,23}/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%]).{8,24}$/;

    if (!values.firstName) {
      errors.firstName = 'First name is required!';
    }

    if (!values.lastName) {
      errors.lastName = 'Last name is required!';
    }

    if (!values.phone) {
      errors.phone = 'Phone is required!';
    }

    if (!values.email) {
      errors.email = 'Email address is required!';
    } else if (!emailRegex.test(values.email)) {
      errors.email = 'Email is invalid!';
    }

    if (!values.username) {
      errors.username = 'Last name is required!';
    }

    if (!values.password) {
      errors.password = 'Password is required!';
    } else if (!passwordRegex.test(values.password)) {
      errors.password =
        'Password must contain at least 8 characters, one lowercase, one uppercase and one special character(!@#$%)';
    }

    if (!values.password2) {
      errors.password2 = 'Password is required!';
    } else if (values.password2 !== values.password) {
      errors.password2 = 'Passwords do not match!';
    }
    return errors;
  };

  return (
    <div className={classes['signup-container']}>
      <div className={classes['signup-form']}>
        <h2 className={classes.signup}>SIGN UP</h2>
        <form onSubmit={submitHandler}>
          <div>
            <label htmlFor='first-name'>First Name</label>
            <input
              ref={firstNameRef}
              onChange={inputChangeHandler}
              value={formValues.firstName}
              id='firstName'
              type='text'
              placeholder='First Name'
              className={classes['signup-input']}
            />
            {formErrors.firstName && (
              <p style={{ color: 'red' }}>{formErrors.firstName}</p>
            )}
          </div>
          <div>
            <label htmlFor='last-name'>Last Name</label>
            <input
              onChange={inputChangeHandler}
              value={formValues.lastName}
              id='lastName'
              type='text'
              placeholder='Last Name'
              className={classes['signup-input']}
            />
            {formErrors.lastName && (
              <p style={{ color: 'red' }}>{formErrors.lastName}</p>
            )}
          </div>
          <div>
            <label htmlFor='phone'>Phone</label>
            <input
              onChange={inputChangeHandler}
              value={formValues.phone}
              id='phone'
              type='text'
              placeholder='Phone Number'
              className={classes['signup-input']}
            />
            {formErrors.phone && (
              <p style={{ color: 'red' }}>{formErrors.phone}</p>
            )}
          </div>
          <div>
            <label htmlFor='email'>Email</label>
            <input
              onChange={inputChangeHandler}
              value={formValues.email}
              id='email'
              type='text'
              placeholder='Email'
              className={classes['signup-input']}
            />
            {formErrors.email && (
              <p style={{ color: 'red' }}>{formErrors.email}</p>
            )}
          </div>
          <div>
            <label htmlFor='username'>Username</label>
            <input
              onChange={inputChangeHandler}
              value={formValues.username}
              id='username'
              type='text'
              placeholder='Username'
              className={classes['signup-input']}
            />
            {formErrors.username && (
              <p style={{ color: 'red' }}>{formErrors.username}</p>
            )}
          </div>

          <div>
            <label htmlFor='password'>Password</label>
            <input
              onChange={inputChangeHandler}
              value={formValues.password}
              id='password'
              type='text'
              placeholder='Password'
              className={classes['signup-input']}
            />
            {formErrors.password && (
              <p style={{ color: 'red' }}>{formErrors.password}</p>
            )}
          </div>
          <div>
            <label htmlFor='password2'>Confirm Password</label>
            <input
              onChange={inputChangeHandler}
              value={formValues.password2}
              id='password2'
              type='text'
              placeholder='Confirm Password'
              className={classes['signup-input']}
            />
            {formErrors.password2 && (
              <p style={{ color: 'red' }}>{formErrors.password2}</p>
            )}
          </div>
          <button type='submit' className={classes['btn-signup']}>
            Sign Up
          </button>
        </form>
        <p>
          Already a member? <Link to='/login'>Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
