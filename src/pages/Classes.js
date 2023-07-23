import { useLoaderData, json } from 'react-router-dom';

import axios from 'axios';

import classes from './Classes.module.scss';

const ClassesPage = (props) => {
  const classesList = useLoaderData();

  return (
    <>
      <table>
        <tbody>
          {classesList.map((item, index) => {
            return (
              <tr key={index}>
                <td data-title='day' className={classes.data}>
                  {item.day}
                </td>
                <td data-title='class' className={classes.data}>
                  {item.classes}
                </td>
                <td data-title='time' className={classes.data}>
                  {item.time}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ClassesPage;

export const classesLoader = async () => {
  try {
    const response = await axios.get('http://localhost:8080/classes');
    return response.data;
  } catch (err) {
    return err;
  }
};
