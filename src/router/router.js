import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import UserLayout from '../layouts/user-layout';
import About from '../pages/about_us';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <UserLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
       {
        path:"about" ,
        element: <About />
      }
      
    ],
    
  },
]);
