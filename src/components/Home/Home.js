import React from "react";
import "./Home.css";
import HomePage from "./imgs/SVG/Home Page.png";
import WhoLogo from "./imgs/SVG/Who we are.png";

const Home = () => {
  return (
    <div className="home">
      <section className="main-section d-flex justify-content-between align-items-center">
        <div>
          <h1 className="">
            Discover your perfect service and the prices that suit your
            business.
          </h1>
          <p className="w-75 lead lh-lg my-4">
            Every business needs from us an integrated coverage in order to
            achieve the goal of our clients. Where better customer service is
            our goals.
          </p>
          <button className="contact-btn">Contact us</button>
        </div>
        <div>
          <img className="" src={HomePage} alt="home logo" />
        </div>
      </section>
      <section className="who-section py-5 my-5 d-flex justify-content-between align-items-center">
        <div>
          <img className="" src={WhoLogo} alt="home logo" />
        </div>
        <div>
          <h1 className="w-50 m-auto">who we are ?</h1>
          <p className="w-50 m-auto lh-lg my-4">
            Behind our Golden Arches is a global team,
            designers,programmers,........etc and numbers of there projects
            others who make up who we are as a brand. It’s the entire Wazwork
            team that makes your business more perfect. Across our business we
            strive to lift up the service for our clients.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
