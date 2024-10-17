import { createBrowserRouter, Navigate} from "react-router-dom";
import Home from '../pages/home/home';
import Login from '../pages/Authh/Login';
import Register from '../pages/Authh/Register';
import App from "../App";
import Offers from "../pages/offers/Offers";
import Contact from "../pages/Contact/Contact";
import Benfite from "../homeused/benfite"
import Cards from "../homeused/cards"
import RoomFeatures from "../homeused/roomfeature"
import AboutRooms from "../homeused/AboutRooms"


//
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
            path: "/benfite",
            element: <Benfite />,
        },
        {
            path: "/cards",
            element: <Cards />,
        },   
        {
            path: "/roomfeatures",
            element: <RoomFeatures />,
        },  
        {
            path: "/AboutRooms",
            element: <AboutRooms />,
        },  
        {
            path: "/offers",
            element: <Offers />,
        },   
        {
            path: "/contact",
            element: <Contact/>,
        },  

]
},
        {
            path: "*", // in case of wrong url, go to home  
            element: <Navigate to={"/"} />,
        },
]);