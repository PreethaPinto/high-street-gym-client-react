import { useLocation, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { useState, useContext } from 'react';

import classes from './TrainersClasses.module.scss';
import { AuthContext } from '../context/AuthContext';

const TrainersIndoorCycling = () => {
  const { currentUser } = useContext(AuthContext);
  const [disabled, setDisabled] = useState(false);
  const location = useLocation();
  const indoorCyclingTrainers = location.state.data;

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
      {indoorCyclingTrainers.map((trainer) => (
        <div className={classes.wrapper}>
          <ul key={trainer.trainer_id} className={classes['trainer-list']}>
            <li>
              {trainer.first_name} {trainer.last_name}
            </li>
            <li>{trainer.classes_taught}</li>
            <li>{trainer.email_id}</li>
          </ul>
          {currentUser ? (
            <button disabled={disabled} onClick={handleToastMessage}>
              Book
            </button>
          ) : (
            <Link to='/login'>
              <button style={{ height: '50px', width: '100px' }}>
                Login to book
              </button>
            </Link>
          )}
          <ToastContainer />
        </div>
      ))}
      <Link to='/' className={classes.back}>
        Return to Home
      </Link>
    </>
  );
};

export default TrainersIndoorCycling;
