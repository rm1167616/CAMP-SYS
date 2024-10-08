import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './pages/shared/header/header'; // Adjust the path based on your project structure
// import HomePage from './HomePage'; // Adjust the path based on your project structure
import Home from './pages/home/home'; // Adjust the path based on your project structure
import Footer from './pages/shared/footer/footer';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {

  return (
      <div className="site-wrap">
        <div className="App">
          {/* <div className="site-mobile-menu">
            <div className="site-mobile-menu-header">
              <div className="site-mobile-menu-close mt-3">
                <span className="icon-close2 js-menu-toggle"></span>
              </div>
            </div>
            <div className="site-mobile-menu-body"></div>
          </div> */}
          <Header />
          <Outlet />
          <Footer />
        </div>
      </div>
  
  );
};


export default App;
