import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import UserLayout from '../layouts/user-layout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <UserLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);
