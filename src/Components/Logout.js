import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import React from "react";
import {useEffect} from 'react';
import { useLocation, useNavigate } from "react-router-dom";

/*
const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Products">Products</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
          <li>
            <Link to= "/Cart">Cart</Link>
          </li>
          <li>
            <Link to ="/Create">Create</Link>
          </li>
        </ul>
 
      </nav>
 
      <Outlet />
      <div align='center'>
        <h1>WELCOME TO IKEA </h1>
        <img src="https://media.istockphoto.com/id/458591757/photo/large-ikea-logo-on-pole.jpg?s=612x612&w=0&k=20&c=To3Q5H7QUL_sis_-4yY0zsAUnzrxSRruYZvZgRnAgs8=" width='120' height="70"></img>
      </div>
    </>
  )
};
 
export default Layout;
*/



function Logout(){
  sessionStorage.removeItem('user-token');
    let navigate = useNavigate();
    let location = useLocation();
    const queryString = location.search;
    let strReturnUrl  =  new URLSearchParams(queryString).get('returnUrl');
 
     
        strReturnUrl = "/Logout";
     
      useEffect(() => {
        navigate(strReturnUrl);
      });
  return (
    <>
    <div>
   
    <p align="center" ><h1> Thank you for visiting! </h1></p>
      
    <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/IKEA_Marketing_Strategy_2022.jpg" width='1600' height="500"></img>
    <br/>

    </div>

    <br/> <br/> <br/> <br/> <br/> <br/>
      <footer class="footer">
    <div class="waves">
      <div class="wave" id="wave1"></div>
      <div class="wave" id="wave2"></div>
      <div class="wave" id="wave3"></div>
      <div class="wave" id="wave4"></div>
    </div>
    <ul class="social-icon">
      <li class="social-icon__item"><a class="social-icon__link" href="#">
          <ion-icon name="logo-facebook"></ion-icon>
        </a></li>
      <li class="social-icon__item"><a class="social-icon__link" href="#">
          <ion-icon name="logo-twitter"></ion-icon>
        </a></li>
      <li class="social-icon__item"><a class="social-icon__link" href="#">
          <ion-icon name="logo-linkedin"></ion-icon>
        </a></li>
      <li class="social-icon__item"><a class="social-icon__link" href="#">
          <ion-icon name="logo-instagram"></ion-icon>
        </a></li>
    </ul>
    <ul class="menu">
      
     <center> 
      <a class="menu__link" href="https://twitter.com/IKEAIndia?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><img height='20' width='20' src="https://cdn-icons-png.flaticon.com/512/733/733635.png"></img> <b>Twitter</b></a>
      <a class="menu__link" href="https://www.instagram.com/ikea.india/"><img height='20' width='20' src="https://seeklogo.com/images/I/instagram-logo-A807AD378B-seeklogo.com.png"></img> <b>Instagram</b></a>
      <a class="menu__link" href="https://www.linkedin.com/company/ikea/"><img height='20' width='20' src="https://cdn-icons-png.flaticon.com/512/61/61109.png"></img> <b>Linkedin</b></a>
      </center>

    </ul>
    <center><p> &nbsp;  &nbsp; &copy; 2024 | All Rights Reserved</p></center>
  </footer>
  <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
  <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    </>
   
  )
}
export default Logout;
