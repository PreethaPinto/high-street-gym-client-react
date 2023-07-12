import { useLocation } from 'react-router-dom';

const TrainersBoxing = () => {
  const location = useLocation();
  const boxingTrainers = location.state.data;

  return (
    <>
      {boxingTrainers.map((trainer) => (
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

export default TrainersBoxing;
