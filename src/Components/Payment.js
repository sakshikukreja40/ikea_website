import { useState } from "react";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import 'D:/1 SAKSHI/projects/ikea project/ikea/src/Components/Payment.css';
import { Link } from "react-router-dom";
 
 
function Payment()
{
 
    const [cname, setCname] = useState("");
    const [cnumber, setCnumber] = useState("");
    const [expiry, setExpiry] = useState("");
    const [cvv, setCvv] = useState("");
    const [result, setResult] = useState("");
    const [errorObj, setErrorObj] = useState({
        cname: "", cnumber: "", expiry: "", cvv: ""
    });
 
 
    function clearFields() {
        setCname("");
        setCnumber("");
        setExpiry("");
        setCvv("");
    }
 
    function handleSubmit(e) {
        e.preventDefault();  // stop the default behaviour
 
        const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
 
        let tempErrorObj = Object.assign({}, errorObj);
 
        tempErrorObj.cname = (cname.length == 0) ? "User name is required" : "";
        tempErrorObj.cnumber = (cnumber.length == 0) ? "Password is required" : "";
        tempErrorObj.expiry = (expiry.length == 0) ?  "Expiry Date is required!" : "";
        tempErrorObj.cvv = (cvv.length == 0) ? "CVV is required" : "";
    }
   
   
 
 
    return(
        <>
            <form onSubmit={handleSubmit}>
                <fieldset>
                <br/>
                    <center><h1>Payment Portal</h1></center>
                    <br/>   
                    <center>
                        <br/>   <br/>
                        <table>
                            <tr>
                                <td>
                                <div style={{border: '2px solid black',padding: '20px'}} align="center">
                        <br/>
                    <legend style={{fontFamily: 'monospace'  , color: 'rgba(44, 46, 47, 0.865)'}}><b> <big> Payment via Card </big> </b></legend><br/>
 
                    <label style={{fontSize: '1.5rem',fontFamily: 'monospace'  , color: '#485785'}}><b><br/>Card Holder name :</b></label> <> </>
                    <input type="text" onChange={(e) => setCname(e.target.value)} />
                    <span className="error">{errorObj.cname}</span>
                    <br /><br />
 
                    <label style={{fontSize: '1.5rem',fontFamily: 'monospace'  , color: '#485785'}}><b>Card Number : </b> </label><> </>
                    <input type="text" onChange={(e) => setCnumber(e.target.value)} />
                    <span className="error">{errorObj.cnumber}</span>
                    <br /><br />
 
                    <label style={{fontSize: '1.5rem',fontFamily: 'monospace'  , color: '#485785'}}><b>Expiry Date : </b> </label><> </>
                    <input type="text" onChange={(e) => setExpiry(e.target.value)} />
                    <span className="error">{errorObj.expiry}</span>
                    <br /><br />
 
                    <label style={{fontSize: '1.5rem',fontFamily: 'monospace'  , color: '#485785'}}><b>CVV :</b> </label><> </>
                    <input type="text" onChange={(e) => setCvv(e.target.value)} />
                    <span className="error">{errorObj.cvv}</span>
                    <br /><br />
 
                    <Link to="/Logout">
                  <button class="cart-btn"><b>Pay</b></button>
                </Link>
 
                    <h3>{result}</h3>
                    </div>
                                </td>
                                <td>
                                <div style={{border: '2px solid black',padding: '20px'}} align="center">
                        <br/>
                    <legend style={{fontFamily: 'monospace'  , color: 'rgba(44, 46, 47, 0.865)'}}><b> <big> Payment via upi </big> </b></legend><br/>
 
                    <h2>Scan this QR code to pay</h2>
                    <span className="error">{errorObj.cvv}</span>
                    <br /><br />
 
                  <img height='244' width='244' src="https://camo.envatousercontent.com/50b0fcec3bbb1dcd1bec68051ff0179c25a6b146/687474703a2f2f76617374657261642e636f6d2f696d616765732f63656e74756d5f71722e706e67"></img>
 
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
 
export default Payment;