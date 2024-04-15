import { lazy } from 'react';
import type { PathRouteProps } from 'react-router-dom';
import {
  createBrowserRouter,
} from "react-router-dom";


const Home = lazy(() => import('../pages/Home'))
const StarrySkyBox = lazy(() => import('../components/StarrySkyBox'))
const WebglTest = lazy(() => import('../components/WebglTest01'))
const Galaxy = lazy(() => import('../components/Galaxy'))

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: 'starry-sky-box',
        element: <StarrySkyBox />,
      },
      {
        path: 'webgl-test',
        element: <WebglTest />,
      },
      {
        path: 'galaxy',
        element: <Galaxy />
      }
    ]
  },
  
  
]);

export const privateRoutes: Array<PathRouteProps> = [];
