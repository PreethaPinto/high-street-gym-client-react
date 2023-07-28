import { useLoaderData, json, Link } from 'react-router-dom';

import classes from './Trainers.module.scss';
import { useState } from 'react';
import axios from 'axios';

const TrainersPage = () => {
  const trainers = useLoaderData();

  const filterTrainersByClassesTaught = (trainers, classTaught) => {
    return trainers.filter((trainer) =>
      trainer.classes_taught.includes(classTaught)
    );
  };

  const zumbaTrainers = filterTrainersByClassesTaught(trainers, 'Zumba');

  const yogaTrainers = filterTrainersByClassesTaught(trainers, 'Yoga');

  const pilatesTrainers = filterTrainersByClassesTaught(trainers, 'Pilates');

  const boxingTrainers = filterTrainersByClassesTaught(trainers, 'Boxing');

  const indoorCyclingTrainers = filterTrainersByClassesTaught(
    trainers,
    'Indoor Cycling'
  );

  const absTrainers = filterTrainersByClassesTaught(trainers, 'Abs');

  const HIITTrainers = filterTrainersByClassesTaught(trainers, 'HIIT');

  const [state] = useState({
    absData: absTrainers,
    boxingData: boxingTrainers,
    HIITData: HIITTrainers,
    indoorCyclingData: indoorCyclingTrainers,
    pilatesData: pilatesTrainers,
    yogaData: yogaTrainers,
    zumbaData: zumbaTrainers,
  });

  return (
    <>
      <div className={classes['trainer-wrapper']}>
        <Link
          to='trainers-zumba'
          state={{ data: state.zumbaData }}
          className={classes['gym-class']}
        >
          ZUMBA
        </Link>

        <Link
          to='trainers-HIIT'
          state={{ data: state.HIITData }}
          className={classes['gym-class']}
        >
          HIIT
        </Link>
        <Link
          to='trainers-Yoga'
          state={{ data: state.yogaData }}
          className={classes['gym-class']}
        >
          YOGA
        </Link>
        <Link
          to='trainers-pilates'
          state={{ data: state.pilatesData }}
          className={classes['gym-class']}
        >
          PILATES
        </Link>
        <Link
          to='trainers-boxing'
          state={{ data: state.boxingData }}
          className={classes['gym-class']}
        >
          BOXING
        </Link>
        <Link
          to='trainers-indoor-cycling'
          state={{ data: state.indoorCyclingData }}
          className={classes['gym-class']}
        >
          INDOOR CYCLING{' '}
        </Link>
        <Link
          to='trainers-abs'
          state={{ data: state.absData }}
          className={classes['gym-class']}
        >
          ABS
        </Link>
      </div>
    </>
  );
};

export default TrainersPage;

export const trainersLoader = async () => {
  try {
    const response = await axios.get('http://localhost:8080/trainers');
    return response.data;
  } catch (err) {
    return err;
  }
};
