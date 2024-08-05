import { useState } from "react";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import 'D:/1 SAKSHI/projects/ikea project/ikea/src/Components/Home.css';
 
function Home(){
    return (
      <>
      <div>
     
      <img src="https://www.green.earth/hs-fs/hubfs/Ikea_case%20study_visual%201.png?width=1200&height=800&name=Ikea_case%20study_visual%201.png" width='1600' height="900"></img>
      
      <center><br/><h2>Now give your home a breathtaking makeover!</h2><br/></center>
      
      <div>
        <center><span >&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <img style={{paddingRight: '30'}} height='400' width='400' src="https://www.ikea.com/ext/ingkadam/m/1e1a2428c8c0d13/original/PH163815-crop002.jpg?f=s"></img> &nbsp; &nbsp; &nbsp; &nbsp;
        </span>
        <span>
        <img style={{marginRight: '30'}} height='400' width='400' src="https://www.ikea.com/ext/ingkadam/m/77d77ef64d94943d/original/PH159252-crop002.jpg?f=xs"></img> &nbsp; &nbsp; &nbsp; &nbsp;
        </span>
        <span>
        <img height='400' width='400' src="https://www.ikea.com/ext/ingkadam/m/66fb4567bdff015b/original/PH181560-crop002.jpg?f=xs"></img>&nbsp; &nbsp; &nbsp; &nbsp; 
        </span></center>
      </div>
      <br/>
      <p align="center" ><h1><br/>  Explore our furniture & home furnishing range</h1>
       
        <h2>IKEA is a global leader in life at home. </h2> <br/>
        
        </p> <br/>
      </div>

<br/> <br/> <br/>
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
    <center><p> &nbsp;  &nbsp;  &copy; 2024 | All Rights Reserved</p></center>
  </footer>
  <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
  <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    
 

      </>
     
    )
  }
  export default Home;