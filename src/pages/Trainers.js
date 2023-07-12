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
  const [zumbaData, setZumbaData] = useState(zumbaTrainers);

  const yogaTrainers = filterTrainersByClassesTaught(trainers, 'Yoga');
  const [yogaData, setYogaData] = useState(yogaTrainers);

  const pilatesTrainers = filterTrainersByClassesTaught(trainers, 'Pilates');
  const [pilatesData, setPilatesData] = useState(pilatesTrainers);

  const boxingTrainers = filterTrainersByClassesTaught(trainers, 'Boxing');
  const [boxingData, setBoxingData] = useState(boxingTrainers);

  const indoorCyclingTrainers = filterTrainersByClassesTaught(
    trainers,
    'Indoor Cycling'
  );
  const [indoorCyclingData, setIndoorCyclingData] = useState(
    indoorCyclingTrainers
  );

  const absTrainers = filterTrainersByClassesTaught(trainers, 'Abs');
  const [absData, setAbsData] = useState(absTrainers);

  const HIITTrainers = filterTrainersByClassesTaught(trainers, 'HIIT');
  const [HIITData, setHIITData] = useState(HIITTrainers);
  // const trainersList = trainers.map((trainer, index) => (
  //   <div key={index} className={classes.trainers}>
  //     <div>{trainer.image}</div>
  //     <h3>
  //       {trainer.first_name} {trainer.last_name}
  //     </h3>
  //     <p>Classes Taught: {trainer.classes_taught}</p>
  //     <p>Email ID: {trainer.email_id}</p>
  //   </div>
  // ));

  return (
    <>
      <div className={classes['trainer-wrapper']}>
        <div className={classes['classes-available']}>
          <button>
            <Link to='trainers-zumba' state={{ data: zumbaData }}>
              Zumba
            </Link>
            Zumba
          </button>
          <button>
            <Link to='trainers-HIIT' state={{ data: HIITData }}>
              HIIT
            </Link>
          </button>
          <button>
            <Link to='trainers-Yoga' state={{ data: yogaData }}>
              Yoga
            </Link>
          </button>
          <button>
            <Link to='trainers-pilates' state={{ data: pilatesData }}>
              Pilates
            </Link>
          </button>
          <button>
            <Link to='trainers-boxing' state={{ data: boxingData }}>
              Boxing
            </Link>
          </button>
          <button>
            <Link
              to='trainers-indoor-cycling'
              state={{ data: indoorCyclingData }}
            >
              Indoor Cycling
            </Link>
          </button>
          <button>
            <Link to='trainers-abs' state={{ data: absData }}>
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
