import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";

import Navbar from "../Navbar";

const ProductDetail = () => {
  const id = 20;
  const [product, setProduct] = useState([]);
  const getProduct = () => {
    axios
      .get(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getProduct();
  }, [id]);
  return (
    <div className="container">
      <h2 className="text-center">Product Details</h2>
      <div className="main">
      <div className="col-md-6">
        <div className="wrapper">
          <img src={product.images} alt="" className="img-fluid" />
        </div>
      </div>
      
      <div className="col-md-6">
        <div className="wrapper">
          <h5 class="card-title">{product.title}</h5>
          <p class="card-text">
            <span class="badge badge-secondary">{product.category?.name}</span>
          </p>
          <p>{product.description}</p>
          <h2>
            {" "}
            <span>&#8377;</span> {product.price}
          </h2>
          <a href="#" class="btn btn-primary btn-block">
            Show Details
          </a>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ProductDetail;
