import { useEffect, useState } from 'react';

import classes from './Classes.module.css';

const ClassesPage = (props) => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const fetchClasses = async () => {
      const response = await fetch('http://localhost:8080/classes');

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

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
      setClasses(loadedClasses);
      console.log(loadedClasses);
    };
    fetchClasses();
  }, []);

  const classesList = classes.map((item) => (
    <ul key={item.classesId}>
      <li>{item.classes}</li>
      <li>{item.day}</li>
      <li>{item.time}</li>
    </ul>
  ));

  return <div>{classesList}</div>;
};

export default ClassesPage;
