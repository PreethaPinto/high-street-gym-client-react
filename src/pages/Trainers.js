import { useLoaderData, json, Link } from 'react-router-dom';

import classes from './Trainers.module.scss';
import { useState } from 'react';

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
          Zumba
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
          Yoga
        </Link>
        <Link
          to='trainers-pilates'
          state={{ data: state.pilatesData }}
          className={classes['gym-class']}
        >
          Pilates
        </Link>
        <Link
          to='trainers-boxing'
          state={{ data: state.boxingData }}
          className={classes['gym-class']}
        >
          Boxing
        </Link>
        <Link
          to='trainers-indoor-cycling'
          state={{ data: state.indoorCyclingData }}
          className={classes['gym-class']}
        >
          Indoor Cycling
        </Link>
        <Link
          to='trainers-abs'
          state={{ data: state.absData }}
          className={classes['gym-class']}
        >
          Abs
        </Link>
      </div>
    </>
  );
};

export default TrainersPage;

export const trainersLoader = async () => {
  const response = await fetch('http://localhost:8080/trainers');

  if (!response.ok) {
    throw json({ message: 'Could not fetch trainers' }, { status: 500 });
  } else {
    const responseData = await response.json();
    console.log(responseData);
    return responseData;
  }
};
