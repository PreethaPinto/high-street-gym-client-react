import { useLocation } from 'react-router-dom';

const TrainersAbs = () => {
  const location = useLocation();
  const absTrainers = location.state.data;
  return (
    <>
      {absTrainers.map((trainer) => (
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

export default TrainersAbs;
