import { useLocation } from 'react-router-dom';

import classes from './TrainersClasses.module.css';

const TrainersPilates = () => {
  const location = useLocation();
  const pilatesTrainers = location.state.data;

  return (
    <>
      {pilatesTrainers.map((trainer) => (
        <div className={classes.wrapper}>
          <ul key={trainer.trainer_id} className={classes['trainer-list']}>
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

export default TrainersPilates;
