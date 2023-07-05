import { useLoaderData, json } from 'react-router-dom';

const TrainersPage = () => {
  const trainers = useLoaderData();

  const trainersList = trainers.map((trainer) => (
    <ul key={trainer.trainer_id}>
      <li>
        {trainer.first_name} {trainer.last_name}
      </li>
      <li>{trainer.classes_taught}</li>
      <li>{trainer.email_id}</li>
    </ul>
  ));

  return <div>{trainersList}</div>;
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
