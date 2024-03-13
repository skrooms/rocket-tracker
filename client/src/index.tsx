import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/styles.css";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './routes/root';
import Home from './routes/home';
import NotFoundPage from './pages/NotFoundPage';
import background from "./assets/images/background_blurred.jpg";
import PlayerProfile from './routes/playerprofile';
import Leaderboards from './routes/leaderboards';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/playerprofile",
        element: <PlayerProfile />
      },
      {
        path: "/leaderboards",
        element: <Leaderboards />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <div className='page bg'>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
