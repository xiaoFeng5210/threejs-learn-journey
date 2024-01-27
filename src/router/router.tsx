import { lazy } from 'react';
import type { PathRouteProps } from 'react-router-dom';
import {
  createBrowserRouter,
} from "react-router-dom";


const Home = lazy(() => import('../pages/Home'))
const StarrySkyBox = lazy(() => import('../components/StarrySkyBox'))

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: 'starry-sky-box',
        element: <StarrySkyBox />,
      },
    ]
  },
  
  
]);

export const privateRoutes: Array<PathRouteProps> = [];
