import { Outlet, Link } from "react-router-dom";
import '../Components/Layout.css';

 
const Layout = () => {
  return (
    <>
      <header id="header">
      <div class="container d-flex align-items-center justify-content-between">
        <div class="logo">
          <span><Link to="/Home"><img class="nav-link scrollto active" textAlign="left" src="https://assets.turbologo.com/blog/en/2021/07/07065737/ikea-logo-font-1.png" height='300px' width='250px'></img></Link>
          </span>
          <br></br>
          {/* <h1><center>Welcome to IKEA!</center></h1> */}
        </div>
      <nav id="navbar" class="navbar">
     
      {/* <Link class="nav-link scrollto" to="/Home">  <button>Home </button></Link> */}
        <Link class="nav-link scrollto" to="/About">  <button class="navbarbtn" >About us</button></Link>
        <Link class="nav-link scrollto" to="/Products">  <button class="navbarbtn" >Products</button>   </Link>  
        <Link class="nav-link scrollto" to="/Login">  <button class="navbarbtn" >Sign In</button>  </Link>  
        <Link class="nav-link scrollto" to="/Create"> <button class="navbarbtn" >Sign Up</button>  </Link>
        <Link class="nav-link scrollto" to="/Logout">  <button class="navbarbtn" >Sign out</button> </Link>
        <Link class="nav-link scrollto" to="/Contact">  <button class="navbarbtn" >Contact</button></Link>
        <Link class="nav-link scrollto" to="/Cart"> <img height='50' width='50' src="https://cdn-icons-png.flaticon.com/512/487/487932.png"></img> </Link>
        
 
 
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>
      </div>
      </header>

     
    </>
  )
};
 
export default Layout;