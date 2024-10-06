import { createBrowserRouter } from "react-router-dom";
//import Login from '../pages/Authh/Login';
//import Register from '../pages/Authh/Register';
import Home from '../pages/home/home';


export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,  
  },
]);
