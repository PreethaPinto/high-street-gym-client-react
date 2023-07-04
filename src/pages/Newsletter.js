import { useState } from 'react';

import classes from './Newsletter.module.css';

const NewsletterPage = () => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(validateForm(inputValue));
    setIsSubmitted(true);
  };

  const validateForm = (value) => {
    let errors = {};

    const emailRegex = /^[a-zA-Z][a-zA-z0-9-_]{3,23}/;

    if (!value) {
      errors.inputValue = 'Email ID is required!';
    } else if (!emailRegex.test(value)) {
      errors.inputValue = 'Email is invalid!';
    }
    return errors;
  };

  return (
    <>
      {/* {isSubmitted ? (
        <div className={classes.success}>
          <h2>Thank you for signing up!</h2>
        </div>
      ) : ( */}
      <form onSubmit={handleSubmit} className={classes.newsletter}>
        <label htmlFor='email'>Sign up for our newsletter!</label>
        <div className={classes['news-signup']}>
          <input
            type='text'
            id='email'
            placeholder='Enter your Email ID'
            value={inputValue}
            onChange={handleChange}
          />
          {error.inputValue && (
            <span className={classes['error-message']}>{error.inputValue}</span>
          )}

          <button type='submit' className={classes.newsBtn}>
            Sign up!
          </button>
        </div>
      </form>
    </>
  );
};

export default NewsletterPage;
