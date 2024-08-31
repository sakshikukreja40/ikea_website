import { useSelector } from "react-redux";
import { removeProduct } from "../Redux/CartAction";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
import '../Components/Cart.css';
import final from './Payment';








function Cart() {
  const dispatch = useDispatch();
  let n = 0;
  const products = useSelector((state) => state.cart.products);
  console.log("products in cart from state", products);


  function onClick_delete(productItem) {
    dispatch(removeProduct(productItem));
    alert("Deleted from Cart");

  }

  function onClick_route() {
    <Link to="/Products"></Link>
  }

  let tarray = [...products];
  let qa = tarray.map(e => e.cost);
  for (let i = 0; i < tarray.length; i++) {
    n = n + Number(qa[i]);

  }

  const [total, setTotal] = useState(n);
  return (
    <>
      <br />
      <center><h2>Cart items</h2></center>
      <br />
      {
        !products || products.length === 0 && <div><center><h2>YOUR CART IS EMPTY</h2></center></div>
      }
      {products && products.length > 0 &&
        <div>

          {products?.map((productItem, index) => {
            return (
              <center>
                <table height='200' width='500'>
                  <tr style={{ border: 'solid thin' }}>
                    <th align="center" height='50' width='50' style={{ border: 'solid thin', borderColor: 'black', textAlign: 'center', fontSize: '1.5rem' }}>Name</th>
                    <th height='50' width='50' style={{ border: 'solid thin', borderColor: 'black', textAlign: 'center',fontSize: '1.5rem' }}>Price</th>
                    <th height='50' width='50' style={{ border: 'solid thin',borderColor: 'black' }}></th>
                    <th height='50' width='50' style={{ border: 'solid thin',borderColor: 'black' }}></th>
                  </tr>
                  

                  <tr style={{ border: 'solid thin' }}>

                  

                    
                      <td style={{ border: 'solid thin', color: 'black', textAlign: 'center' }}><div>{productItem.prodname}</div></td>
                      <td style={{ border: 'solid thin', color: 'black', textAlign: 'center' }}><div>{productItem.cost}</div> </td>
                      <td style={{ border: 'solid thin', color: 'black', textAlign: 'center' }}><div><img src={productItem.image} height="150" width="200" alt="hi"></img></div> </td>
                      <td style={{ border: 'solid thin', color: 'black', textAlign: 'center' }}><button onClick={() => onClick_delete(productItem.id)}><img height="40" width="40" src="https://cdn-icons-png.freepik.com/512/1345/1345874.png"></img></button></td>

                 

                  </tr>
                  <br/>  <br/>

                </table>
              </center>

            );
          })}
<br/>
          <center><table width='500' height='30' style={{ border: 'solid thin', borderColor: 'black'}}>
            <tr>
              <td >
                <div style={{textAlign: 'center'}}>
                <h1>Total =  Rs. {n}</h1>
                <final total={total} />
                <br/>
               
                
                </div>
              </td>
            </tr>
            <tr>
              
            </tr>
          </table></center>
         <center>
         <br/>
         <Link to="/Payment">
                  <button class="cart-btn"><b>Proceed to checkout</b></button>
                </Link>
         </center>
        </div>
      }
      
<br/> <br/> <br/>  <br/> <br/> <br/> <br/>
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

export default Cart;