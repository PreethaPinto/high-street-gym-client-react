import { useLocation } from 'react-router-dom';

const TrainersIndoorCycling = () => {
  const location = useLocation();
  const indoorCyclingTrainers = location.state.data;

  return (
    <>
      {indoorCyclingTrainers.map((trainer) => (
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

export default TrainersIndoorCycling;
