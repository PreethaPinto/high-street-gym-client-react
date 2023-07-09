import { Link, Form, json, useActionData } from 'react-router-dom';

import classes from './Signup.module.css';

const SignupPage = () => {
  const data = useActionData();

  return (
    <div className={classes['signup-container']}>
      <div className={classes['signup-form']}>
        <h2 className={classes.signup}>SIGN UP</h2>
        <Form method='post'>
          {data && data.userValidate && (
            <ul>
              {data.userValidate.map((err) => (
                <li key={err}>{err}</li>
              ))}
            </ul>
          )}
          <div>
            <label htmlFor='first_name'>First Name</label>
            <input
              id='first_name'
              name='first_name'
              type='text'
              placeholder='First Name'
              className={classes['signup-input']}
            />
            {/* {errors.first_name && (
              <p style={{ color: 'red' }}>{errors.first_name}</p>
            )} */}
          </div>
          <div>
            <label htmlFor='last_name'>Last Name</label>
            <input
              id='last_name'
              type='text'
              name='last_name'
              placeholder='Last Name'
              className={classes['signup-input']}
            />
            {/* {errors.last_name && (
              <p style={{ color: 'red' }}>{errors.last_name}</p>
            )} */}
          </div>
          <div>
            <label htmlFor='phone_number'>Phone</label>
            <input
              id='phone_number'
              type='text'
              name='phone_number'
              placeholder='Phone Number'
              className={classes['signup-input']}
            />
            {/* {errors.phone_number && <p style={{ color: 'red' }}>{errors.phone_number}</p>} */}
          </div>
          <div>
            <label htmlFor='email_id'>Email</label>
            <input
              id='email_id'
              type='text'
              name='email_id'
              placeholder='Email'
              className={classes['signup-input']}
            />
            {/* {errors.email_id && <p style={{ color: 'red' }}>{errors.email_id}</p>} */}
          </div>
          <div>
            <label htmlFor='username'>Username</label>
            <input
              id='username'
              type='text'
              name='username'
              placeholder='Username'
              className={classes['signup-input']}
            />
            {/* {errors.username && (
              <p style={{ color: 'red' }}>{errors.username}</p>
            )} */}
          </div>

          <div>
            <label htmlFor='password'>Password</label>
            <input
              id='password'
              type='text'
              name='password'
              placeholder='Password'
              className={classes['signup-input']}
            />
            {/* {errors.password && (
              <p style={{ color: 'red' }}>{errors.password}</p>
            )} */}
          </div>
          <div>
            <label htmlFor='confirm_password'>Confirm Password</label>
            <input
              id='confirm_password'
              type='text'
              name='confirm_password'
              placeholder='Confirm Password'
              className={classes['signup-input']}
            />
            {/* {errors.confirm_password && (
              <p style={{ color: 'red' }}>{errors.confirm_password}</p>
            )} */}
          </div>
          <button type='submit' className={classes['btn-signup']}>
            Sign Up
          </button>
        </Form>
        <p>
          Already a member? <Link to='/login'>Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;

export const signupAction = async ({ request }) => {
  const data = await request.formData();

  const signupData = {
    first_name: data.get('first_name'),
    last_name: data.get('last_name'),
    phone_number: data.get('phone_number'),
    email_id: data.get('email_id'),
    username: data.get('username'),
    password: data.get('password'),
    confirm_password: data.get('confirm_password'),
  };
  console.log(signupData);

  const response = await fetch('http://localhost:8080/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(signupData),
  });

  if (response.status === 400) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: 'Could not submit form' }, { status: 500 });
  }
};
