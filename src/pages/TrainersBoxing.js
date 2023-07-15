import { useLocation } from 'react-router-dom';

import classes from './TrainersClasses.module.css';

const TrainersBoxing = () => {
  const location = useLocation();
  const boxingTrainers = location.state.data;

  return (
    <>
      {boxingTrainers.map((trainer) => (
        <div className={classes.wrapper}>
          <ul key={trainer.trainer_id}>
            <li>
              {trainer.first_name} {trainer.last_name}
            </li>
            <li>{trainer.classes_taught}</li>
            <li>{trainer.email_id}</li>
          </ul>
          <button className={classes['trainer-button']}>Book</button>
        </div>
      ))}
    </>
  );
};

export default TrainersBoxing;
