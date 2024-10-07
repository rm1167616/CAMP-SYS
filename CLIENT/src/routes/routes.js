import { createBrowserRouter, Navigate} from "react-router-dom";
import Home from '../pages/home/home';
import Login from '../pages/Authh/Login';
import Register from '../pages/Authh/Register';
import App from "../App";
import AddOffer from "../pages/offers/AddOffer";
import UpdateOffer from "../pages/offers/UpdateOffer";
import Offers from "../pages/offers/Offers";


export const routes = createBrowserRouter([
  { 
    path : '', 
    element: <App/> , // Parent 
    children: [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/register",
            element: <Register />,
        },    
        {
            path: "/offers",
            children: [ // no '/' in children to avoid errors 
            {
              path: '' ,
              element: <Offers/>
            },
            {
                path: 'add' , // no '/' before add
                element: <AddOffer/>
            },
            {
                path: ':id' ,
                element: <UpdateOffer/>
            },
      ]
  },   
]
},
      {
      path: "*", // in case of wrong url, go to home  
      element: <Navigate to={"/"} />,
      },
]);