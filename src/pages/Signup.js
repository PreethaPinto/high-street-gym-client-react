import { Link, Form, json, useActionData } from 'react-router-dom';

import classes from './RegisterSignup.module.scss';

const SignupPage = () => {
  const data = useActionData();

  return (
    <div className={classes.container}>
      <h2>SIGN UP</h2>
      <Form method='post'>
        {data && data.userValidate && (
          <ul>
            {data.userValidate.map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        )}
        <input
          id='first_name'
          name='first_name'
          type='text'
          placeholder='First Name'
          required
          className={classes['signup-input']}
        />
        {/* {errors.first_name && (
              <p style={{ color: 'red' }}>{errors.first_name}</p>
            )} */}
        <input
          id='last_name'
          type='text'
          name='last_name'
          placeholder='Last Name'
          required
          className={classes['signup-input']}
        />
        {/* {errors.last_name && (
              <p style={{ color: 'red' }}>{errors.last_name}</p>
            )} */}
        <input
          id='phone_number'
          type='text'
          name='phone_number'
          placeholder='Phone Number'
          required
          className={classes['signup-input']}
        />
        {/* {errors.phone_number && <p style={{ color: 'red' }}>{errors.phone_number}</p>} */}
        <input
          id='email_id'
          type='text'
          name='email_id'
          required
          className={classes['signup-input']}
        />
        {/* {errors.email_id && <p style={{ color: 'red' }}>{errors.email_id}</p>} */}
        <input
          id='username'
          type='text'
          name='username'
          placeholder='Username'
          required
          className={classes['signup-input']}
        />
        {/* {errors.username && (
              <p style={{ color: 'red' }}>{errors.username}</p>
            )} */}

        <input
          id='password'
          type='text'
          name='password'
          placeholder='Password'
          required
          className={classes['signup-input']}
        />
        {/* {errors.password && (
              <p style={{ color: 'red' }}>{errors.password}</p>
            )} */}

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

const xmlbuilder = require('xmlbuilder');
const fetch = require('node-fetch');

export const signupAction = async ({ request }) => {
  const data = await request.formData();

  const signupData = {
    first_name: data.get('first_name'),
    last_name: data.get('last_name'),
    phone_number: data.get('phone_number'),
    email_id: data.get('email_id'),
    username: data.get('username'),
    password: data.get('password'),
  };
  console.log(signupData);

  // Convert the signupData object to XML format
  const xmlData = xmlbuilder.create('signupData');
  for (const [key, value] of Object.entries(signupData)) {
    xmlData.ele(key, value);
  }
  const xmlString = xmlData.end({ pretty: true });

  console.log(xmlString);

  const response = await fetch('http://localhost:8080/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/xml',
    },
    body: xmlString,
  });

  if (response.status === 400) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: 'Could not submit form' }, { status: 500 });
  }
};

//   const response = await fetch('http://localhost:8080/signup', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(signupData),
//   });

//   if (response.status === 400) {
//     return response;
//   }

//   if (!response.ok) {
//     throw json({ message: 'Could not submit form' }, { status: 500 });
//   }
// };
