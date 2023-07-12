import { useLocation } from 'react-router-dom';

const TrainersHIIT = () => {
  const location = useLocation();
  const HIITTrainers = location.state.data;
  return (
    <>
      {HIITTrainers.map((trainer) => (
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

export default TrainersHIIT;
