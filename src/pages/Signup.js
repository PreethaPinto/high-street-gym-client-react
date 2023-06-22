import classes from './Signup.module.css';

const SignupPage = () => {
  const submitHandler = () => {};

  return (
    <div className={classes['signup-container']}>
      <form onSubmit={submitHandler} className={classes['signup-form']}>
        <h3 className={classes.signup}>SIGN UP</h3>
        <div className={classes['signup-input']}>
          <input
            type='text'
            placeholder='First Name'
            className={classes['signup-input']}
          />
          <input
            type='text'
            placeholder='Last Name'
            className={classes['signup-input']}
          />
        </div>
        <div className={classes['signup-input']}>
          <input
            type='text'
            placeholder='Phone'
            className={classes['signup-input']}
          />
          <input
            type='text'
            placeholder='Email'
            className={classes['signup-input']}
          />
        </div>
        <div className={classes['signup-input']}>
          <input
            type='text'
            placeholder='Username'
            className={classes['signup-input']}
          />
          <input
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
