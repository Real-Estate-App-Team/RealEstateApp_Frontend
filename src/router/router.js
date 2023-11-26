import { RouterProvider, createBrowserRouter, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import UserLayout from '../layouts/user-layout';
import AboutPage from '../pages/about-page';

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
        element: <AboutPage />
      }
      
    ],
    
  },
]);
const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
