import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import UserPage from './Components/UserPage';
import PostPage from './Components/PostPage/PostPage';

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  {
    path: "/userpage",
    element: <UserPage />,
  },
  { path: "/postpage", element: <PostPage /> }
])


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <RouterProvider router={router} />
);