import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './shared/Layout.js';
import Home from './pages/Home.js';
import Partners from './pages/Partners.js';
import Login from './pages/Login.js';
import Register from './pages/Register.js';
import PartnerDetails from './pages/PartnerDetails.js';

const router = createBrowserRouter([
  {
    path: '/',
    element: React.createElement(Layout),
    children: [
      { index: true, element: React.createElement(Home) },
      { path: 'partners', element: React.createElement(Partners) },
      { path: 'login', element: React.createElement(Login) },
      { path: 'register', element: React.createElement(Register) },
      { path: 'partners/:id', element: React.createElement(PartnerDetails) },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  React.createElement(React.StrictMode, null, React.createElement(RouterProvider, { router }))
);
