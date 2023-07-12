import React from 'react';
import { useLocation } from 'react-router-dom';

const TrainersZumba = (props) => {
  const location = useLocation();
  const zumbaTrainers = location.state.data;
  console.log(zumbaTrainers);

  return (
    <>
      {zumbaTrainers.map((trainer) => (
        <ul key={trainer.trainer_id}>
          <li>
            {trainer.first_name} {trainer.last_name}
          </li>
          <li>{trainer.classes_taught}</li>
          <li>{trainer.email_id}</li>
        </ul>
      ))}
    </>
  );
};

export default TrainersZumba;
