import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootswatch/dist/morph/bootstrap.min.css";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Products from './Components/Products';
import Login from './Components/Login';
import NotFound from './Components/NotFound';
import ProtectedRoute from './Components/ProtectedRoute';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Logout from './Components/Logout';
import UserCreate from './Components/Create';
import { Navbar } from 'react-bootstrap';
import { configureStore } from '@reduxjs/toolkit';
import  CartReducer  from './Redux/CartReducer';
import { Provider } from 'react-redux';


 const store = configureStore({
  reducer:{
    cart: CartReducer
  }
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store = {store}>
    <App />
  </Provider>
    
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
window.iop = 100;
const routing = (
  <Router>
    
      <header id="header">
      <div class="container d-flex align-items-center justify-content-between">
        <div class="logo">
          <span><Link to="/"><img class="nav-link scrollto active" textAlign="left" src="https://assets.turbologo.com/blog/en/2021/07/07065737/ikea-logo-font-1.png" height='300px' width='250px'></img></Link>
          </span>
          <br></br>
          {/* <h1><center>Welcome to IKEA!</center></h1> */}
        </div>
      <nav id="navbar" class="navbar">
      
        {/*<Link class="nav-link scrollto" to="/About">  About Us</Link> */}
        <Link class="nav-link scrollto" to="/Products">  Products   </Link>  
        <Link class="nav-link scrollto" to="/Login">  Sign In  </Link>  
        <Link class="nav-link scrollto" to="/UserCreate"> Sign Up  </Link> 
        <Link class="nav-link scrollto" to="/Logout">  Sign Out </Link>
        {/*<Link class="nav-link scrollto" to="/Contact">  Contact Us</Link>*/}

        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>
      </div>
      </header>

      <div id="contact">
        <center>
       
          <p class="copyright">
                  <br/> © Team 1 <br></br> @ IKEA Furnitures, since 2024 <br/>
                  
                 <img height="20px" width="20px" src="https://cdn4.iconfinder.com/data/icons/picons-social/57/38-instagram-2-512.png"></img> Instagram  &nbsp; &nbsp; <img height="20px" width="20px" src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/twitter-icon.png"></img>    Twitter 
                </p>
        </center>

      </div>

    <Routes>
      <Route path="/" element={<App />} />
      {/*<Route path="/About" element={<About />} />*/}

      <Route path="/Products" element={
        <ProtectedRoute returnUrl="/Products">
          <Products />
        </ProtectedRoute>
      } />
      <Route path="/Login" element={<Login />} />
      <Route path="/UserCreate" element={<UserCreate />} />
      <Route path="/Logout" element={<Logout />} />
      {/*<Route path="/Contact" element={<Contact />} />*/}
      <Route path="*" element={<NotFound />} />
    </Routes>

  </Router>
);






reportWebVitals();

