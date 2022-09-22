import React, { useState } from "react";
import "./Products.css";
import ProductImg from "./imgs/products.svg";
const Head = () => {
  return (
    <div className="row products-head px-3">
      <div className="col-md-6">
        <h2>Our services</h2>
        <p>
          our service depends on what customers need from us. After giving a
          brief description of our services on the main page, customers can
          communicate to discuss the project to be implemented to reach the best
          solution and implementation immediately.
        </p>
      </div>
      <div className="col-md-6">
        <img src={ProductImg} alt="products" className="w-100" />
      </div>
    </div>
  );
};
const NavProduct = ({ content }) => {
  return (
    <button type="button" className="btn btn-outline-primary rounded-pill m-2">
      {content}
    </button>
  );
};
const NavProducts = () => {
  const products = [
    "UI/UX",
    "Web development",
    "Logo Design",
    "Social Media Marketing",
    "Artificial intelligence",
    "Data Science",
  ];
  return (
    <div className="nav-products-container py-3 text-center">
      {products.map((product) => (
        <NavProduct content={product} key={product} />
      ))}
    </div>
  );
};
const Products = () => {
  const [product, setProduct] = useState("");
  return (
    <>
      <Head />
      <NavProducts />
    </>
  );
};

export default Products;
