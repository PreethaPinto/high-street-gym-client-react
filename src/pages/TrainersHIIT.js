import { useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';

import classes from './TrainersClasses.module.scss';

const TrainersHIIT = () => {
  const [disabled, setDisabled] = useState(false);
  const location = useLocation();
  const HIITTrainers = location.state.data;

  const toastMessage = classes['toast-message'];

  const handleToastMessage = () => {
    toast.success('You are booked in!', {
      position: toast.POSITION.BOTTOM_CENTER,
      className: toastMessage,
    });
    setDisabled(true);
  };
  return (
    <>
      {HIITTrainers.map((trainer) => (
        <div className={classes.wrapper}>
          <ul key={trainer.trainer_id} className={classes['trainer-list']}>
            <li>
              {trainer.first_name} {trainer.last_name}
            </li>
            <li>{trainer.classes_taught}</li>
            <li>{trainer.email_id}</li>
          </ul>
          <button
            disabled={disabled}
            onClick={handleToastMessage}
            className={classes['trainer-button']}
          >
            Book
          </button>
          <ToastContainer />
        </div>
      ))}
    </>
  );
};

export default TrainersHIIT;
