import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/styles.css";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './routes/root';
import Home from './routes/home';
import NotFoundPage from './pages/NotFoundPage';
import background from "./assets/images/background_blurred.jpg";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/home",
        element: <Home />
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
