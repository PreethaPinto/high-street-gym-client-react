import { useLocation } from 'react-router-dom';

const TrainersYoga = (props) => {
  const location = useLocation();
  const yogaTrainers = location.state.data;
  console.log(yogaTrainers);
  return (
    <>
      {yogaTrainers.map((trainer) => (
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

export default TrainersYoga;
