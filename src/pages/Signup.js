import { Link, Form, useActionData, redirect } from 'react-router-dom';
import axios from 'axios';
import classes from './RegisterSignup.module.scss';

const SignupPage = () => {
  const errors = useActionData();
  const data = useActionData();

  let errorMessages = [];

  for (const key in errors) {
    errorMessages.push({
      error: errors[key].msg,
      path: errors[key].path,
    });
  }

  return (
    <div className={classes.container}>
      <h2>SIGN UP</h2>
      <Form method='post'>
        <input
          id='first_name'
          name='first_name'
          type='text'
          placeholder='First Name'
          required
          className={classes['signup-input']}
        />
        <input
          id='last_name'
          type='text'
          name='last_name'
          placeholder='Last Name'
          required
          className={classes['signup-input']}
        />

        <input
          id='phone_number'
          type='number'
          name='phone_number'
          placeholder='Phone Number'
          // pattern='[0-9]{10}'
          className={classes['signup-input']}
        />
        <input
          id='email_id'
          type='email'
          name='email_id'
          placeholder='Email'
          required
          className={classes['signup-input']}
        />

        <input
          id='username'
          type='text'
          name='username'
          placeholder='Username'
          required
          className={classes['signup-input']}
        />

        <input
          id='password'
          type='text'
          name='password'
          placeholder='Password'
          required
          className={classes['signup-input']}
        />

        <button type='submit' className={classes['btn-signup']}>
          Sign Up
        </button>
        <span>
          Already a member? <br /> <Link to='/login'>Login</Link>
        </span>
      </Form>
    </div>
  );
};

export default SignupPage;

export const signupAction = async ({ request }) => {
  try {
    const data = await request.formData();
    const signupData = {
      first_name: data.get('first_name'),
      last_name: data.get('last_name'),
      phone_number: data.get('phone_number'),
      email_id: data.get('email_id'),
      username: data.get('username'),
      password: data.get('password'),
    };

    const response = await axios.post(
      'http://localhost:8080/signup',
      signupData
    );
    //console.log(response);
    return redirect('/');
  } catch (err) {
    return err.response.data.errors;
  }

  // const response = await fetch('http://localhost:8080/signup', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(signupData),
  // });

  // if (response.status === 400) {
  //   return response;
  // }

  // if (!response.ok) {
  //   throw json({ message: 'Could not submit form' }, { status: 500 });
  // }
  // return redirect('/');
};
