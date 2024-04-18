import './product.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import trolly from '../images/trolly.png';
import banner from '../images/banner.jpg';
import logo from '../images/logo.png';
import profile from '../images/profile.jpg';
function Products() {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState({});
    const [selectedImage, setSelectedImage] = useState();

    useEffect(() => {
        clickItems();
    }, []);

    const clickItems = async () => {
        try {
            console.log("clickItems : ")
            const response = await axios.get('http://localhost:4000');
            console.log("response : ", response.data)
            console.log(response.data[0].image);
            setProducts(response.data);
            setSelectedImage(response.data[0].image);
            setSelectedProduct(response.data[0]);
        } catch (error) {
            console.log("Error while fetching data");
        }
    };

    const handleSmallImageClick = (product) => {
        console.log("product : ", product.image);
        setSelectedProduct(product);
        setSelectedImage(product.image);
    };

    return (
        <>
                <div className="container my-2">
                <i className="fa fa-bars mx-2" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop" style={{ fontSize: "24px" }}></i>
                <i className="fa fa-search mx-3" style={{ fontSize: "24px" }}></i>
                <div className="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="staticBackdropLabel">
                            <center className='ms-5'>
                                <img className="ms-5 ps-2" src={logo} alt="logo.." height="35" />
                            </center>
                        </h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <div>
                            <div className="container profileBox" style={{backgroundColor:"#E7EAEE" ,border:"2px solid lightgray"}}>
                                <div className="row">
                                    <div className="col col-lg-4">
                                        <div className="bg-info m-2 profileCircle">
                                            <img src={profile} alt="progile.."/>
                                        </div>
                                    </div>
                                    <div className="col col-lg-8">
                                        <span ><h6 className="mt-2 mx-3" >Johan Smith</h6></span>
                                        <p className="mx-3">Adminstrator</p>
                                    </div>
                                </div>
                            </div>

                            <div className="container my-4 ">
                                <div className="row my-4 subSections">
                                    <div className="col col-lg-3">
                                        <i className="fa fa-cart-plus my-2 mx-3" style={{ fontSize: "24px" }}></i>
                                    </div>
                                    <div className="col col-lg-9 ">
                                        <p className="mx-3 my-2">Dashboard</p>
                                    </div>
                                </div>
                                <div className="row my-4 subSections">
                                    <div className="col col-lg-3">
                                        <i className="fa fa-cart-plus my-2 mx-3" style={{ fontSize: "24px" }}></i>
                                    </div>
                                    <div className="col col-lg-9 ">
                                        <p className="mx-3 my-2">Product Mangment</p>
                                    </div>
                                </div>
                                <div className="row my-4 subSections">
                                    <div className="col col-lg-3">
                                        <i className="fa fa-cart-plus my-2 mx-3" style={{ fontSize: "24px" }}></i>
                                    </div>
                                    <div className="col col-lg-9 ">
                                        <p className="mx-3 my-2">Invantory Mangment</p>
                                    </div>
                                </div>
                                <div className="row my-4 subSections">
                                    <div className="col col-lg-3">
                                        <i className="fa fa-cart-plus my-2 mx-3" style={{ fontSize: "24px" }}></i>
                                    </div>
                                    <div className="col col-lg-9 ">
                                        <p className="mx-3 my-2">Order Mangment</p>
                                    </div>
                                </div>
                                <div className="row my-4 subSections">
                                    <div className="col col-lg-3">
                                        <i className="fa fa-cart-plus my-2 mx-3" style={{ fontSize: "24px" }}></i>
                                    </div>
                                    <div className="col col-lg-9 ">
                                        <p className="mx-3 my-2">Cart</p>
                                    </div>
                                </div>
                                <div className="row my-4 subSections">
                                    <div className="col col-lg-3">
                                        <i className="fa fa-cart-plus my-2 mx-3" style={{ fontSize: "24px" }}></i>
                                    </div>
                                    <div className="col col-lg-9 ">
                                        <p className="mx-3 my-2">CheckOut</p>
                                    </div>
                                </div>
                                <div className="row my-4 subSections">
                                    <div className="col col-lg-3">
                                        <i className="fa fa-cart-plus my-2 mx-3" style={{ fontSize: "24px" }}></i>
                                    </div>
                                    <div className="col col-lg-9 ">
                                        <p className="mx-3 my-2">Refund</p>
                                    </div>
                                </div>
                                <div className="row my-4 subSections">
                                    <div className="col col-lg-3">
                                        <i className="fa fa-cart-plus my-2 mx-3" style={{ fontSize: "24px" }}></i>
                                    </div>
                                    <div className="col col-lg-9 ">
                                        <p className="mx-3 my-2">Replacment</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="conatiner strip my-3">
                    Home > Product Management > Product Description
                </div>

                <div className="banner" style={{ backgroundImage: `url(${banner})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className='row' style={{ backgroundColor: 'transparent' }}>
                        <div className="col-lg-6 col-md-12 col-12 d-flex flex-column align-items-center justify-content-center" style={{ backgroundColor: 'transparent' }}>
                            <h3 classNAme="text-light" style={{ backgroundColor: 'transparent', color: "white", marginRight: "25vh" }}>Product Description</h3>
                            <p style={{ backgroundColor: 'transparent', color: "white", marginLeft: "15vh" }}>Lorem ipsum dolor sit amet consectetur adipisicing! Exercitationem eum assumenda facere aut similique. r sit amet consectetur adipisicing! Exercitatione r sit amet consectetur adipisicing! Exercitatione</p>
                        </div>
                        <div className="col col-lg-6 col-md-12 col-12" style={{ backgroundColor: 'transparent' }}>
                            <img src={trolly} alt="" srcset="" height="400" style={{ backgroundColor: 'transparent' }} />
                        </div>
                    </div>
                </div>

                <div className="conatiner my-4 watchBox">
                    <div className="row">
                        <div className="col col-lg-5">
                            <div className="productsBox">
                                <div className="productItems">
                                    <img src={`http://localhost:4000/${selectedImage}`} alt="Loaded...." />
                                </div>
                                <div className="mycrousel my-2">
                                    <div className="row">
                                        {products.map((product, index) => (
                                            <div className="col col-lg-3" key={index}>
                                                <div className="smallItemContainer" onClick={() => handleSmallImageClick(product)}>
                                                    <img src={`http://localhost:4000/${product.image}`} alt="Loaded...." height="70" />
                                                </div>
                                            </div>
                                        ))}

                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col col-lg-7">
                            <div className="mx-5 rating">
                                {Array.from({ length: 5 }, (_, index) => (
                                    <span key={index + 1} style={{ marginRight: '5px' }}>
                                        {index < selectedProduct.ratings ? <i className="fa fa-star yellow-star" style={{ fontSize: '24px' }} /> : <i className="fa fa-star gray-star" style={{ fontSize: '24px' }} />}
                                    </span>
                                ))}
                            </div>
                            <div className="details mx-5">
                                <h4 className="mb-3">{selectedProduct.desc}</h4>
                                <span className="p-1 mt-3 inbox">In Stock</span>
                                <p className="my-2" style={{ color: "lightgray" }}>
                                    {selectedProduct.description}
                                </p>
                                <span>Color</span>

                                <div className="color-options">
                                    <span className='circle red'></span>
                                    <span className='circle blue'></span>
                                    <span className='circle green'></span>
                                </div>

                                <div className="quantity w-50">
                                    <form action="" className="m-2">
                                        <label className="my-2" htmlFor="exampleInputEmail1">
                                            Quantity
                                        </label>
                                        <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ height: "3vw" }} />
                                    </form>
                                </div>
                                <h2 className="">${selectedProduct.price}</h2>
                                <div>
                                    <button className="btn btn-primary my-3">Buy Now</button>
                                    <button className="btn btn-transparent my-3 mx-5 mybutton">
                                        <i className="fa fa-cart-plus mx-3 text-black" style={{ fontSize: "24px" }}></i>Add To Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Products;