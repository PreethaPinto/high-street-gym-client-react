import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import RootLayout from './pages/Root';
import AboutPage from './pages/About';
import BlogPage, { blogLoader } from './pages/Blog';
import BlogDetailPage, { blogDetailsLoader } from './pages/BlogDetail';
import BlogsRootLayout from './pages/BlogsRootLayout';
import ClassesPage, { classesLoader } from './pages/Classes';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import SignupPage, { signupAction } from './pages/Signup';
import TrainersPage, { trainersLoader } from './pages/Trainers';
import ErrorPage from './pages/Error';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        { path: 'about', element: <AboutPage /> },
        {
          path: 'blogs',
          element: <BlogsRootLayout />,
          children: [
            { index: true, element: <BlogPage />, loader: blogLoader },
            {
              path: ':blogId',
              element: <BlogDetailPage />,
              loader: blogDetailsLoader,
            },
          ],
        },
        { path: 'classes', element: <ClassesPage />, loader: classesLoader },
        { path: 'login', element: <LoginPage /> },
        { path: 'signup', element: <SignupPage />, action: signupAction },
        { path: 'trainers', element: <TrainersPage />, loader: trainersLoader },
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
