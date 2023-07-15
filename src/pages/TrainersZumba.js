import React from 'react';
import { useLocation } from 'react-router-dom';

import classes from './TrainersClasses.module.css';

const TrainersZumba = (props) => {
  const location = useLocation();
  const zumbaTrainers = location.state.data;
  console.log(zumbaTrainers);

  return (
    <>
      {zumbaTrainers.map((trainer) => (
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

export default TrainersZumba;
