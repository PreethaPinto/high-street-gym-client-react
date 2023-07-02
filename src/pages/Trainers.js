import { useState, useEffect } from 'react';

const TrainersPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [fetchedTrainers, setFetchedTrainers] = useState([]);
  const [httpErrors, setHttpErrors] = useState(null);

  useState(() => {
    setIsLoading(true);
    setHttpErrors(false);

    const fetchTrainers = async () => {
      const response = await fetch('http://localhost:8080/trainers');

      if (!response.ok) {
        throw new Error('Something went wrong');
      } else {
        const responseData = await response.json();

        const loadedTrainers = [];

        for (const key in responseData) {
          loadedTrainers.push({
            trainerId: key,
            firstName: responseData[key].firstName,
            lastName: responseData[key].lastName,
            classesTaught: responseData[key].classesTaught,
            emailId: responseData[key].emailId,
          });
        }
        setFetchedTrainers(loadedTrainers);
        console.log(loadedTrainers);
      }
    };
    fetchTrainers();
  }, []);

  const trainersList = fetchedTrainers.map((trainer) => (
    <ul>
      <li>
        {trainer.firstName} {trainer.lastName}
      </li>
      <li>{trainer.classesTaught}</li>
      <li>{trainer.emailId}</li>
    </ul>
  ));

  return <div>{trainersList}</div>;
};

export default TrainersPage;
