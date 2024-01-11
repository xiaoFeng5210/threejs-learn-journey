import { lazy } from 'react';
import type { PathRouteProps } from 'react-router-dom';
import {
  createBrowserRouter,
} from "react-router-dom";


const Home = lazy(() => import('../pages/Home'))

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
]);

export const privateRoutes: Array<PathRouteProps> = [];
