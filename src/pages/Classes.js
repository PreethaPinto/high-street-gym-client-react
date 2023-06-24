import { useEffect, useState } from 'react';

import classes from './Classes.module.css';

const ClassesPage = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedClasses, setFetchedClasses] = useState([]);

  useEffect(() => {
    const fetchClasses = async () => {
      setIsLoading(true);
      const response = await fetch('http://localhost:8080/fetchedClasses');

      if (!response.ok) {
        throw new Error('Something went wrong');
      } else {
        const responseData = await response.json();

        const loadedClasses = [];

        for (const key in responseData) {
          loadedClasses.push({
            classesId: key,
            fetchedClasses: responseData[key].fetchedClasses,
            day: responseData[key].day,
            time: responseData[key].time,
          });
        }
        setFetchedClasses(loadedClasses);
        console.log(loadedClasses);
      }
      setIsLoading(false);
    };
    fetchClasses();
  }, []);

  const classesList = fetchedClasses.map((item) => (
    <ul key={item.classesId}>
      <li>{item.fetchedClasses}</li>
      <li>{item.day}</li>
      <li>{item.time}</li>
    </ul>
  ));

  return <div>{classesList}</div>;
};

export default ClassesPage;

export const classLoader = async () => {
  const response = await fetch('http://localhost:8080/fetchedClasses');

  if (!response.ok) {
    throw new Error('Something went wrong');
  }

  const responseData = await response.json();

  const loadedClasses = [];

  for (const key in responseData) {
    loadedClasses.push({
      classesId: key,
      fetchedClasses: responseData[key].fetchedClasses,
      day: responseData[key].day,
      time: responseData[key].time,
    });
  }
};
