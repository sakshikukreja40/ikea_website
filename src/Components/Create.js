import { useState } from "react";
import './Error.css';
import { dataServiceObj2 } from "../services/data.service2";
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from "./Login";
import NotFound from "./NotFound";
import React from "react";
import App from "../App";
import ProtectedRoute from "./ProtectedRoute";
import Logout from "./Logout";
import Products from "./Products";
import { useLocation, useNavigate } from "react-router-dom";
import '../Components/Create.css'

window.flag1 = 0;
function UserCreate() {
    let navigate = useNavigate(); // for navigation using code
    var flag = 0;
    let result1 = [];
    const [uname, setUname] = useState("");
    const [password, setPassword] = useState("");
    const [retypePassword, setRetypePassword] = useState("");
    const [email, setEmail] = useState("");
    const [result, setResult] = useState("");
    const [custArray, setCustArray] = useState([]);
    const [errorObj, setErrorObj] = useState({
        uname: "", password: "", retypePassword: "", email: ""
    });

    function clearFields() {
        setUname("");
        setPassword("");
        setRetypePassword("");
        setEmail("");
    }
    function checkValid(username, password, email) {


        dataServiceObj2.getAllCustomers().then((resData) => {
            setCustArray(resData.data);
        });

        var i = 0, flag1 = 0;
        for (i = 0; i < custArray.length; i++) {
            if (username === custArray[i].username || username === custArray[i].email) {
                window.flag1 = 1;
                break;
            }
            if (window.flag1 == 1)
                break;
        }
        if (window.flag1 == 0) {
            let custObj = {};
            custObj.username = username;
            custObj.password = password;
            custObj.email = email;

            dataServiceObj2.addCustomer(custObj).then((resData) => {
                alert("New Customer Created");
            });
            navigate("/Login");
        }
        else {
            alert("Username or Email Already Exists");
        }
    }

    function handleSubmit(e) {
        e.preventDefault();  // stop the default behaviour

        const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

        let tempErrorObj = Object.assign({}, errorObj);

        tempErrorObj.uname = (uname.length == 0) ? "User name is required" : "";
        tempErrorObj.password = (password.length == 0) ? "Password is required" : "";
        tempErrorObj.email = validEmailRegex.test(email) ? '' : 'Email is not valid!';
        
        tempErrorObj.retypePassword = (password != retypePassword) ?   "  <br/> Password and re-type password should be same!" : "";

        setErrorObj(tempErrorObj);

        let valuesArray = Object.values(tempErrorObj);
        let index = valuesArray.findIndex(item => item.length != 0);


        if (index == -1) {
            // Make an ajax call to send data to server
            flag = 1;
            checkValid(uname, password, email);
            if (window.flag1 == 0) {
                clearFields();
                setResult("User Created");
            }
            else {
                setResult("You have entered invalid data. Please enter valid data.");
            }
        }
        else {
            setResult("You have entered invalid data. Please enter valid data.")
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <br/>
                    <br/>
                    <br/>

                    <center>
                        <table>
                            <tr>
                                <td>
                                    <div style={{border: '2px solid black', paddingTop: '20px'}} align="center">
                                        <legend style={{ fontSize: '2.5rem', fontFamily: 'Arial, Helvetica, sans-serif'  , color: 'rgba(44, 46, 47, 0.865)' }}><b>Customer Form</b><br/></legend>

                                        <label style={{fontSize: '1.5rem',fontFamily: 'monospace'  , color: '#485785'}}><b>User Name  :</b></label> <> </>
                                        <input type="text" onChange={(e) => setUname(e.target.value)} />
                                        <span className="error">{errorObj.uname}</span>
                                        <br /><br />

                                        <label style={{fontSize: '1.5rem',fontFamily: 'monospace'  , color: '#485785'}}><b>Password  : </b></label> <> </>
                                        <input type="password" onChange={(e) => setPassword(e.target.value)} />
                                        <span className="error">{errorObj.password}</span>
                                        <br /><br />

                                        <label style={{fontSize: '1.5rem',fontFamily: 'monospace'  , color: '#485785'}}><b>Retype Password  : </b></label> <> </>
                                        <input type="password" onChange={(e) => setRetypePassword(e.target.value)} />
                                        <span className="error">{errorObj.retypePassword}</span>
                                        <br /><br />

                                        <label style={{fontSize: '1.5rem',fontFamily: 'monospace'  , color: '#485785'}}><b>E-mail Id:</b></label> <> </>
                                        <input type="text" onChange={(e) => setEmail(e.target.value)} />
                                        <span className="error">{errorObj.email}</span>
                                        <br /><br />

                                        <input class="register" type="submit" value="Register" />

                                        <h3>{result}</h3>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </center>
                </fieldset>
            </form>
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

export default UserCreate;