import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import RootLayout from './pages/Root';
import AboutPage from './pages/About';
import BlogPage from './pages/Blog';
import BlogDetailPage from './pages/BlogDetail';
import ClassesPage from './pages/Classes';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import SignupPage from './pages/Signup';
import TrainersPage from './pages/Trainers';
import ErrorPage from './pages/Error';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { path: '', element: <HomePage /> },
        { path: 'about', element: <AboutPage /> },
        { path: 'blog', element: <BlogPage /> },
        { path: 'blog/:blogId', element: <BlogDetailPage /> },
        { path: 'classes', element: <ClassesPage /> },
        { path: 'login', element: <LoginPage /> },
        { path: 'signup', element: <SignupPage /> },
        { path: 'trainers', element: <TrainersPage /> },
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
