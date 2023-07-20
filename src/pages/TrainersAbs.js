import { useLocation } from 'react-router-dom';

import classes from './TrainersClasses.module.scss';

const TrainersAbs = () => {
  const location = useLocation();
  const absTrainers = location.state.data;
  return (
    <>
      {absTrainers.map((trainer) => (
        <div className={classes.wrapper}>
          <ul key={trainer.trainer_id} className={classes['trainer-list']}>
            <li>
              {trainer.first_name} {trainer.last_name}
            </li>
            <li>{trainer.classes_taught}</li>
            <li>{trainer.email_id}</li>
          </ul>
          <button>Book</button>
        </div>
      ))}
    </>
  );
};

export default TrainersAbs;
