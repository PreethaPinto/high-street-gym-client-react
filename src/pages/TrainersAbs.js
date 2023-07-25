import { useLocation, Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import classes from './TrainersClasses.module.scss';

const TrainersAbs = () => {
  const { currentUser } = useContext(AuthContext);

  const [disabled, setDisabled] = useState(false);
  const location = useLocation();
  const absTrainers = location.state.data;
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
      {absTrainers.map((trainer) => (
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
            <button style={{ height: '50px', width: '100px' }}>
              Login to book
            </button>
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

export default TrainersAbs;
