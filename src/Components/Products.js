import { useState, useEffect } from "react";
import { dataServiceObj } from "../services/data.service";
import 'D:/1 SAKSHI/projects/ikea project/ikea/src/Components/Create.css';
// import './item.css';
import './a1.css';
import './a2.css';
import { useDispatch } from 'react-redux'
import { addProduct } from "../Redux/CartAction";
// import 'C:/Users/abanthia/Downloads/Hope/Hope/ikea 2/ikea/src/Components/Product.css';


function Products() {

    const dispatch = useDispatch();
    const [ProdsArray, setProdsArray] = useState([]);

    // For reading data from user through textboxes
    const [prodid, setProdid] = useState("");
    const [prodname, setProdname] = useState("");
    const [prodcategory, setProdCategory] = useState("");
    const [prodarea, setProdArea] = useState("");
    const [cost, setCost] = useState("");
    const [details, setDetails] = useState("");
    const [image, setImage] = useState("");
    const [result, setResult] = useState("");

    useEffect(() => {
        //Runs only on the first render
        getProdsButton_click();
    }, []);
    function getProdsButton_click() {

        dataServiceObj.getAllProducts().then((resData) => {
            setProdsArray(resData.data);
        });
    }


    function onClick_Cart(item) {
        dispatch(addProduct(item));
        alert("Added to Cart");

    }
    function addProdButton_click() {
        let prodObj = {};
        prodObj.prodid = prodid;
        prodObj.prodname = prodname;
        prodObj.prodcategory = prodcategory;
        prodObj.prodarea = prodarea;
        prodObj.cost = cost;
        prodObj.details = details;
        prodObj.image = image;


        dataServiceObj.addProd(prodObj).then((resData) => {
            alert("New Product added to Server");
            getProdsButton_click(); // get the latest data from server
            clearFields();
        });
    }

    function clearFields() {
        setProdid("");
        setProdname("");
        setProdCategory("");
        setProdArea("");
        setCost("");
        setDetails("");
        setImage("");
    }


    function deleteProd_click(id) {
        dataServiceObj.deleteProd(id).then((resData) => {
            alert("Product details are deleted from Server");
            getProdsButton_click(); // get the latest data from server            
        });

    }

    function selectProd_click(id) {

        dataServiceObj.getProdById(id).then((resData) => {
            let prodObj = resData.data;
            setProdid(prodObj.prodid);
            setProdname(prodObj.prodname);
            setProdCategory(prodObj.prodcategory);
            setProdArea(prodObj.prodarea);
            setCost(prodObj.cost);
            setDetails(prodObj.details);
            setImage(prodObj.image);
        });
    }

    function updateProdButton_click() {
        let prodObj = {};
        prodObj.prodid = prodid;
        prodObj.prodname = prodname;
        prodObj.prodcategory = prodcategory;
        prodObj.prodarea = prodarea;
        prodObj.details = details;
        prodObj.image = image;
        prodObj.cost = cost;
        dataServiceObj.updateProd(prodObj).then((resData) => {
            alert("Dept details are updated in Server");
            getProdsButton_click(); // get the latest data from server
            clearFields();
        });
    }



    if (window.access == 1) {
        let resultArray = ProdsArray.map((item, index) => {
            return <tr key={index}>
                <td style={{ border: 'solid thin', color: 'black', textAlign: 'center' }}>   {item.prodid}  </td>
                <td style={{ border: 'solid thin', color: 'black', textAlign: 'center' }}>   {item.prodname}  </td>
                <td style={{ border: 'solid thin', color: 'black', textAlign: 'center' }}>   {item.prodcategory}  </td>
                <td style={{ border: 'solid thin', color: 'black', textAlign: 'center' }}>   {item.prodarea}  </td>
                <td style={{ border: 'solid thin', color: 'black', textAlign: 'center' }}>   {item.cost}  </td>
                <td style={{ border: 'solid thin', color: 'black', textAlign: 'center' }}>    <img src={item.image} height="150" width="200" alt="hi"></img> </td>
                <td style={{ border: 'solid thin', color: 'black', textAlign: 'center' }}>
                    <a onClick={() => selectProd_click(item.id)} href="javascript:void(0);"><img  width='25' height='25' src="https://static-00.iconduck.com/assets.00/select-all-icon-512x512-wvy0ipfw.png"></img></a> <br/>  <br/>
                    <a onClick={() => deleteProd_click(item.id)} href="javascript:void(0);"><img width='25' height='25' src="https://cdn-icons-png.freepik.com/512/1345/1345874.png"></img></a><br/>  <br/>
                </td>
            </tr>
        });

        return (<>
            <br/>
            <h3 align="center">Admin Page for Adding Products</h3>
            <hr />
            <div align="center">
                <input type="button" class="button" onClick={getProdsButton_click} value="Get Products" />
                <input type="button" class="button" onClick={addProdButton_click} value="Add Product" />
                <input type="button" class="button" onClick={updateProdButton_click} value="Update Product" />
                <hr /></div>

            <div align="center">
                <input type="text" placeholder="Prod Number" value={prodid} onChange={(e) => setProdid(e.target.value)} />
                <input type="text" placeholder="Prod Name" value={prodname} onChange={(e) => setProdname(e.target.value)} />
                <input type="text" placeholder="Category" value={prodcategory} onChange={(e) => setProdCategory(e.target.value)} />
                <input type="text" placeholder="Area" value={prodarea} onChange={(e) => setProdArea(e.target.value)} />
                <input type="text" placeholder="Details" value={details} onChange={(e) => setDetails(e.target.value)} />
                <input type="text" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} />
                <input type="text" placeholder="Cost" value={cost} onChange={(e) => setCost(e.target.value)} />
                <hr /></div>


            <table border="2" width="500" cellspacing="5" cellpadding="25" align="center">
                <div align='center'>
                    <tr style={{ border: 'solid thin', color: 'black', textAlign: 'center' }}>
                        <th style={{ border: 'solid thin', color: 'black', textAlign: 'center' }} border="2">Product ID</th>
                        <th style={{ border: 'solid thin', color: 'black', textAlign: 'center' }}>Product Name</th>
                        <th style={{ border: 'solid thin', color: 'black', textAlign: 'center' }}>Category</th>
                        <th style={{ border: 'solid thin', color: 'black', textAlign: 'center' }}>Area</th>
                        <th style={{ border: 'solid thin', color: 'black', textAlign: 'center' }}>Cost</th>
                        <th style={{ border: 'solid thin', color: 'black', textAlign: 'center' }}>Image</th>
                        <th style={{ border: 'solid thin', color: 'black', textAlign: 'center' }}>Edit</th>

                    </tr>
                    {resultArray}</div>
            </table>
            <br/> <br/> <br/> <br/> <br/> <br/> <br/>
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
    <center><p> &nbsp;  &nbsp; Team-1 &copy; 2024 | All Rights Reserved by Deloitte</p></center>
  </footer>
  <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
  <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>

        </>);
    }
    else if (window.access == 2) {
        let resultArray = ProdsArray.map((item, index) => {
            /*return <tr key={index}>
                <td>   {item.prodid}  </td>
                <td>   {item.prodname}  </td>
                <td>   {item.prodcategory}  </td>
                <td>   {item.prodarea}  </td>
                <td>   {item.cost}  </td>
            </tr>*/




            return (
             
                <span className="item">
                    <img src={item.image} alt="item" />
                    <div className="item__info">
                        <p className="i_title">{item.prodname}</p>
                        <p className="i_price">
                            <small>Rs.</small>
                            <strong>{item.cost}</strong>
                            <br />
                        </p>
                    </div>
                    <button onClick={() => onClick_Cart(item)}><img height='30' width='30' src="https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png"></img></button>
                 
                </span>

                
                

            )
        });


        return (
            <>

                {/* <input type="button" onClick={getProdsButton_click} value="Get Products" /> */}
                {/*getProdsButton_click()*/}
                
                    <table>
                        <tr>
                            <th></th>
                            <th></th>
                        </tr>
                        <tr>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <td>
                                <section class="panel">
                                    <div class="panel-body">
                                        <input type="text" placeholder="Keyword Search" class="form-control" />
                                    </div>
                                </section>
                            </td>

                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <td><br/>  <br/>
                                <section class="panel">
                                    <div class="panel-body">
                                        <form role="form product-form">
                                            <span class="form-group">
                                                <select class="form-slide">
                                                <option>---Type---</option>
                                                    <option>Bedroom</option>
                                                    <option>Hall</option>
                                                    <option>Kitchen</option>
                                                </select>
                                                
                                            </span>
                                            <button class="btn-filter" type="submit">Filter</button>
                                           
                                        </form>
                                    </div>
                                </section>
                            </td>


                        </tr>
                    </table>
                <br/>  <br/> 

                <div className="home">
                    <div className="home__container">
                        <div className="home__row">
                            {resultArray}
                        </div>
                    </div>
                </div>

                <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
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
}

export default Products;