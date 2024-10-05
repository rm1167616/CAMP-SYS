import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/home/home';  // Example component

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);
