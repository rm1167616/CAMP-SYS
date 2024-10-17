import { createBrowserRouter, Navigate} from "react-router-dom";
import Home from '../pages/home/home';
import Login from '../pages/Authh/Login';
import Register from '../pages/Authh/Register';
import App from "../App";
import Offers from "../pages/offers/Offers";
import Contact from "../pages/Contact/Contact";
import ForgotPassword from "../pages/Authh/ForgotPassword";
import About from "../pages/About/About";
import Rooms from "../pages/Rooms/AvailbaleRooms";


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
            path: "/forgot-password",
            element: <ForgotPassword />,
        },  
        {
            path: "/offers",
            element: <Offers/>
        },   
        {
            path: "/contact",
            element: <Contact/>,
        },  
        {
            path: "/about",
            element: <About/>,
        },  
        {
            path: "/Rooms",
            element: <Rooms/>,
        },  

]
},
        {
            path: "*", // in case of wrong url, go to home  
            element: <Navigate to={"/"} />,
        },
]);