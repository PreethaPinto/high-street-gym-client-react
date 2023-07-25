import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import RootLayout from './pages/Root';
import AboutPage from './pages/About';
import BlogPage, { blogLoader } from './pages/Blog';
import BlogItem from './components/BlogItem';
import BlogsRootLayout from './pages/BlogsRootLayout';
import ClassesPage, { classesLoader } from './pages/Classes';
import HomePage from './pages/Home';
import LoginPage, { loginAction } from './pages/Login';
import SignupPage, { signupAction } from './pages/Signup';
import TrainersPage, { trainersLoader } from './pages/Trainers';
import ErrorPage from './pages/Error';
import TrainersRootLayout from './pages/TrainersRootLayout';
import TrainersZumba from './pages/TrainersZumba';
import TrainersYoga from './pages/TrainersYoga';
import TrainersHIIT from './pages/TrainersHIIT';
import TrainersIndoorCycling from './pages/TrainersIndoorCycling';
import TrainersPilates from './pages/TrainersPilates';
import TrainersBoxing from './pages/TrainersBoxing';
import TrainersAbs from './pages/TrainersAbs';
import Write from './pages/Write';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        { path: 'about', element: <AboutPage /> },
        { path: 'write', element: <Write /> },
        {
          path: 'blogs',
          element: <BlogsRootLayout />,
          children: [
            { index: true, element: <BlogPage /> },
            {
              path: ':blogId',
              element: <BlogItem />,
            },
          ],
        },
        { path: 'classes', element: <ClassesPage />, loader: classesLoader },
        { path: 'login', element: <LoginPage /> },
        { path: 'signup', element: <SignupPage />, action: signupAction },
        {
          path: 'trainers',
          element: <TrainersRootLayout />,
          children: [
            { index: true, element: <TrainersPage />, loader: trainersLoader },
            { path: 'trainers-zumba', element: <TrainersZumba /> },
            { path: 'trainers-yoga', element: <TrainersYoga /> },
            { path: 'trainers-HIIT', element: <TrainersHIIT /> },
            { path: 'trainers-boxing', element: <TrainersBoxing /> },
            { path: 'trainers-pilates', element: <TrainersPilates /> },
            {
              path: 'trainers-indoor-cycling',
              element: <TrainersIndoorCycling />,
            },
            { path: 'trainers-abs', element: <TrainersAbs /> },
          ],
        },
      ],
    },
  ]);

  return (
    <div className='background-image'>
      <div className='background-image-overlay'>
        <RouterProvider router={router}></RouterProvider>
      </div>
    </div>
  );
};

export default App;
