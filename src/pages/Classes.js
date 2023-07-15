import { useLoaderData, json } from 'react-router-dom';

import classes from './Classes.module.css';

const ClassesPage = (props) => {
  const classesList = useLoaderData();

  return (
    <>
      <table className={classes.table}>
        {classesList.map((item, index) => {
          return (
            <tr key={index} className={classes.row}>
              <td className={classes.data}>{item.day}</td>
              <td className={classes.data}>{item.classes}</td>
              <td className={classes.data}>{item.time}</td>
            </tr>
          );
        })}
      </table>
    </>
  );
};

export default ClassesPage;

export const classesLoader = async () => {
  const response = await fetch('http://localhost:8080/classes');

  if (!response.ok) {
    throw json({ message: 'Could not fetch classes' }, { status: 500 });
  } else {
    const responseData = await response.json();
    console.log(responseData);
    return responseData;
  }
};
