import { useLoaderData } from 'react-router-dom';

import classes from './Classes.module.css';

const ClassesPage = (props) => {
  const classes = useLoaderData();

  const loadedClasses = classes.map((item) => (
    <ul key={item.classes_id}>
      <li>{item.classes}</li>
      <li>{item.day}</li>
      <li>{item.time}</li>
    </ul>
  ));

  return <>{loadedClasses}</>;
};

export default ClassesPage;

export const classesLoader = async () => {
  const response = await fetch('http://localhost:8080/classes');

  if (!response.ok) {
    throw new Error('Something went wrong');
  } else {
    const responseData = await response.json();
    console.log(responseData);
    return responseData;
  }
};
