import { Link, useNavigate } from 'react-router-dom';

import { useEffect, useRef, useState, useContext } from 'react';

import classes from './RegisterSignup.module.scss';
import { AuthContext } from '../context/AuthContext';

const LoginPage = () => {
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      console.log(inputs);

      navigate('/');
    } catch (err) {
      setError(err.response.data);
    }
  };

  const userRef = useRef();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  return (
    <div className={classes.container}>
      <h1>LOGIN</h1>
      <form method='post' onSubmit={handleSubmit}>
        <input
          type='text'
          id='username'
          name='username'
          placeholder='Username'
          ref={userRef}
          onChange={handleChange}
        />

        <input
          type='text'
          id='password'
          placeholder='Password'
          name='password'
          onChange={handleChange}
        />

        {error && <p>Invalid username or password</p>}

        <button type='submit'>Login</button>

        <span>
          Don't have an account? <br />
          <Link to='/signup'>Register</Link>
        </span>
      </form>
    </div>
  );
};

export default LoginPage;
