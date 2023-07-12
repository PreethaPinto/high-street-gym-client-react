import { useLoaderData, json, Link } from 'react-router-dom';

import classes from './Trainers.module.css';
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
        <div className={classes['classes-available']}>
          <button>
            <Link to='trainers-zumba' state={{ data: state.zumbaData }}>
              Zumba
            </Link>
            Zumba
          </button>
          <button>
            <Link to='trainers-HIIT' state={{ data: state.HIITData }}>
              HIIT
            </Link>
          </button>
          <button>
            <Link to='trainers-Yoga' state={{ data: state.yogaData }}>
              Yoga
            </Link>
          </button>
          <button>
            <Link to='trainers-pilates' state={{ data: state.pilatesData }}>
              Pilates
            </Link>
          </button>
          <button>
            <Link to='trainers-boxing' state={{ data: state.boxingData }}>
              Boxing
            </Link>
          </button>
          <button>
            <Link
              to='trainers-indoor-cycling'
              state={{ data: state.indoorCyclingData }}
            >
              Indoor Cycling
            </Link>
          </button>
          <button>
            <Link to='trainers-abs' state={{ data: state.absData }}>
              Abs
            </Link>
          </button>
        </div>
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
