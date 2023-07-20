import classes from './Write.module.scss';

const Write = () => {
  return (
    <div className={classes.write}>
      <div className={classes.content}>content</div>
      <div className={classes.menu}>
        <div className={classes.item}>I1</div>
        <div className={classes.item}>I2</div>
      </div>
    </div>
  );
};

export default Write;
