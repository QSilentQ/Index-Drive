import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import LandingPage from './pages/LandingPage';
import Auth from './pages/Auth';
import Reg from './pages/Reg';
import ProfileInfo from './pages/ProfileInfo';
import BookingPage from './pages/BookingPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>,
  },
  {
    path: "/auth",
    element: <Auth/>,
  },
  {
    path: "/reg",
    element: <Reg/>,
  },
  {
    path: "/profile",
    element: <ProfileInfo/>
  },
  {
    path: "/booking",
    element: <BookingPage/>
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <RouterProvider router={router} />
);
