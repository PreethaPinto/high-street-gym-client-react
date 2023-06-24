import classes from './Newsletter.module.css';

const NewsletterPage = () => {
  return (
    <form method='post' className={classes.newsletter}>
      <label htmlFor='newsletter'>Sign up for our newsletter!</label>
      <input type='text' id='newsletter' />
      <button type='submit'>Sign up!</button>
    </form>
  );
};

export default NewsletterPage;
