import { useLocation } from 'react-router-dom';

const TrainersPilates = () => {
  const location = useLocation();
  const pilatesTrainers = location.state.data;

  return (
    <>
      {pilatesTrainers.map((trainer) => (
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

export default TrainersPilates;
