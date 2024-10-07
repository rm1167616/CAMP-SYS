import { createBrowserRouter } from "react-router-dom";
import App from '../App';  // Assuming App is the parent component
import Home from '../pages/home/home.js';  // Example component

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,  // App is the parent component
    children: [
      {
        path: "",  // Default path to load Home component
        element: <Home />,
      },
      // Add more child routes here if needed
    ],
  },
]);
