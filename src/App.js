import logo from './logo.svg';
//import 'bootswatch/dist/sandstone/bootstrap.min.css';
//import { Button,Navbar,Nav,NavItem,NavDropdown,MenuItem } from 'react-bootstrap';
import './App.css';
import Products from './Components/Products';
import UserCreate from './Components/Create';
import { useState } from 'react';
import NotFound from './Components/NotFound';
import ProtectedRoute from './Components/ProtectedRoute';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Layout from './Components/Layout';
import About from './Components/About';
import Contact from './Components/Contact';
import Login from './Components/Login';
import Cart from './Components/Cart';
import Payment from './Components/Payment';
import Create from './Components/Create';
import Home from './Components/Home';
import Logout from './Components/Logout';

 
/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/
 
 
 
function App() {
 
 
 
  return (
    <>
    <Router>
      <Layout/>
      <Routes>
       
        <Route exact path = '/Login' Component={Login}/>
        <Route path="/Products" element={
        <ProtectedRoute returnUrl="/Products">
          <Products />
        </ProtectedRoute>
      } />
        <Route exact path = '/Cart' Component={Cart}/>
        <Route exact path = '/Payment' Component={Payment}/>
        <Route exact path = '/Create' Component={Create}/>
        <Route exact path = '/About' Component={About}/>
        <Route exact path = '/Contact' Component={Contact}/>
        <Route exact path = '/Home' Component={Home}/>
        <Route exact path = '/Logout' Component={Logout}/>
        
       
       
      </Routes>
    </Router>
     
    </>
 
  )
}
export default App;