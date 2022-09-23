import React from "react";
import { Link } from "react-router-dom";
import PhoneIcon from "./imgs/Phone.svg";
import FaceBookIcon from "./imgs/Facebook.svg";
import TwitterIcon from "./imgs/Twitter.svg";
import LinkedInIcon from "./imgs/LinkedIn.svg";
import "./Footer.css";
const Company = () => {
  return (
    <div className="col-md-4">
      <h3>Company</h3>
      <ul className="px-3">
        <h6 className="text-dark">
          <Link to="/" className="text-decoration-none text-dark">
            Home
          </Link>
        </h6>
        <h6 className="">
          <Link to="/services" className="text-decoration-none text-dark">
            Services
          </Link>
        </h6>
        <h6 className=" ">
          <Link to="/team" className="text-decoration-none text-dark">
            Our Team
          </Link>
        </h6>
        <h6 className="">
          <Link to="/products" className="text-decoration-none text-dark">
            Products
          </Link>
        </h6>
      </ul>
    </div>
  );
};
const ContactUs = () => {
  return (
    <div className="col-md-4">
      <h3>Contact Us</h3>
      <h6>
        <img src={PhoneIcon} alt="phone-icon" />
        <Link
          to="tel:+20103366889"
          className="mx-1 text-decoration-none text-dark"
        >
          +20103366889
        </Link>
      </h6>
      <div>
        <Link to="#">
          <img className="" src={FaceBookIcon} alt="FaceBookIcon" />
        </Link>
        <Link to="#">
          <img className="mx-4" src={TwitterIcon} alt="TwitterIcon" />
        </Link>
        <Link to="#">
          <img className="" src={LinkedInIcon} alt="LinkedInIcon" />
        </Link>
      </div>
    </div>
  );
};
const Subscribe = () => {
  return (
    <div className="col-md-4">
      <h3>Subscribe</h3>
      <h6>Subscribe to Our Newsletter and be aware of our latests!</h6>
      <input
        type="text"
        placeholder="Type your E-Mail..."
        className="form-control d-inline-block"
      />
      <button className="btn btn-primary d-inline-block">Subscribe</button>
    </div>
  );
};
const Footer = () => {
  return (
    <div className="bg-color py-3 my-3">
      <div className="container">
        <div className="row mx-0">
          <Company />
          <ContactUs />
          <Subscribe />
        </div>
      </div>
    </div>
  );
};

export default Footer;
