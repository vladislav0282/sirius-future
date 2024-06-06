import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


/* existing imports */
import Main from "./components/Main";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import path from 'path';
import Header from './components/Header';
import Schedule from './components/Schedule';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[{
      path: "/main",
      element: <Main />,
    },
    {
      path: "/schedule",
      element: <Schedule />,
    }
    ]
  },
]);






const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


