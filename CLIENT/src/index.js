import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from "react-router-dom";
import { routes } from './routes/routes';  // Ensure this file exists and the import is correct
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* RouterProvider with the routes */}
    <RouterProvider router={routes} />
  </React.StrictMode>
);

// Log performance results
reportWebVitals();
