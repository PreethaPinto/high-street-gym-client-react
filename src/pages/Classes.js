import { useEffect, useState } from 'react';

import classes from './Classes.module.css';

const ClassesPage = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [fetchedClasses, setFetchedClasses] = useState([]);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setHttpError(false);

    const fetchClasses = async () => {
      const response = await fetch('http://localhost:8080/classes');

      if (!response.ok) {
        throw new Error('Something went wrong');
      } else {
        const responseData = await response.json();

        const loadedClasses = [];

        for (const key in responseData) {
          loadedClasses.push({
            classesId: key,
            classes: responseData[key].classes,
            day: responseData[key].day,
            time: responseData[key].time,
          });
        }
        setFetchedClasses(loadedClasses);
        console.log(loadedClasses);
      }
      setIsLoading(false);
    };

    fetchClasses().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.classesLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.classesError}>
        <p>Could not fetch data</p>
      </section>
    );
  }

  const classesList = fetchedClasses.map((item) => (
    <ul key={item.classesId}>
      <li>{item.classes}</li>
      <li>{item.day}</li>
      <li>{item.time}</li>
    </ul>
  ));

  return <div>{classesList}</div>;
};

export default ClassesPage;

// export const classLoader = async () => {
//   const response = await fetch('http://localhost:8080/classes');

//   if (!response.ok) {
//     throw new Error('Something went wrong');
//   }

//   const responseData = await response.json();

//   const loadedClasses = [];

//   for (const key in responseData) {
//     loadedClasses.push({
//       classesId: key,
//       fetchedClasses: responseData[key].fetchedClasses,
//       day: responseData[key].day,
//       time: responseData[key].time,
//     });
//   }
// };
