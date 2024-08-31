import React, { useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { dataServiceObj1 } from "../services/data.service1.js";
import { dataServiceObj2 } from '../services/data.service2';
import UserCreate from './Create';
import '../Components/Login.css';

window.access = 0;
function Login() {

    const [userArray, setUserArray] = useState([]);
    const [customerArray, setCustomerArray] = useState([]);
    // For reading data from user through textboxes
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [result, setResult] = useState("");
    const [result1, setResult1] = useState("");

    let navigate = useNavigate(); // for navigation using code
    let location = useLocation(); // for reading query string params

    function loginButton_click() {
        const queryString = location.search; // returns the query string from the current url      
        let strReturnUrl = new URLSearchParams(queryString).get('returnUrl');

        if (strReturnUrl == null) {
            strReturnUrl = "/Home";
        }

        dataServiceObj1.getAllUsers().then((resData) => {
            setUserArray(resData.data);
        });
        setResult1("Working");
        var i, flag = 0;
        for (i = 0; i < userArray.length; i++) {
            if (username === userArray[i].username && password === userArray[i].password) {
                flag = 1;
                break;
            }
            if (flag == 1)
                break;
        }

        if (flag == 1) {
            window.access = 1;
            // In real-time apps, we will get the token from the server
            // JWT token is the popular token generation library          
            let token = "ASJDFJF87ADF8745LK4598SAD7FAJSDF45JSDLFKAS";
            sessionStorage.setItem('user-token', token);

            // navigate("/Depts");
            navigate(strReturnUrl);
        }
        else {
            setResult("Invalid User Id or Password");
        }
        dataServiceObj2.getAllCustomers().then((resData) => {
            setCustomerArray(resData.data);
        });
        setResult1("Working");
        var flag1 = 0;
        for (i = 0; i < customerArray.length; i++) {
            if (username === customerArray[i].username && password === customerArray[i].password) {
                flag1 = 1;
                break;
            }
            if (flag1 == 1)
                break;
        }

        if (flag1 == 1) {
            window.access = 2;
            // In real-time apps, we will get the token from the server
            // JWT token is the popular token generation library          
            let token = "ASJDFJF87ADF8745LK4598SAD7FAJSDF45JSDLFKAS";
            sessionStorage.setItem('user-token', token);

            // navigate("/Depts");
            navigate(strReturnUrl);
        }
        else {
            setResult("Invalid User Name or Password");
        }
    }


    return (
        <>

            <fieldset>
                <br/><br/> <br/>
            <center>
            <table>
                <tr>
                    <td>
                    <div style={{border: '2px solid black'}} align = "center"><br/>
                <legend style={{fontSize: '2.5rem', fontFamily: 'Arial, Helvetica, sans-serif'  , color: 'rgba(44, 46, 47, 0.865)'}}><b>Login <br/></b></legend>
                <label style={{fontSize: '1.5rem', fontFamily: 'monospace'  , color: '#485785'}}><b>User Name  :</b>   </label><> </>
                <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
                <br /><br />
                <label style={{fontSize: '1.5rem', fontFamily: 'monospace'  , color: '#485785'}}><b>Password  :</b>   </label><> </>
                <input type="password" value={password} onChange={(args) => setPassword(args.target.value)} />
                <br /><br />
                <input type="button" class="button" onClick={loginButton_click} value="Login" /> 
                <p style={{ color: "red" }}>{result}</p>
                </div>
                
                    </td>
                </tr>
            </table>
            </center>
            </fieldset>


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

    );

}

export default Login;
