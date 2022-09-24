import React from "react";
import "./Team.css";
import ourTeam from "./imgs/Our Team.jpg";

const OurTeam = () => {
  return (
    <section className="ourTteam-section d-flex justify-content-between align-items-center">
      <div>
        <h2 className="w-75">
          Discover your perfect service and the prices that suit your business.
        </h2>
        <p className="w-75 lead lh-lg my-4">
          Every business needs from us an integrated coverage in order to
          achieve the goal of our clients. Where better customer service is our
          goals.
        </p>
        <button className="contact-btn">Contact us</button>
      </div>
      <div>
        <img alt="" className="container-fluid w-75" src={ourTeam} />
      </div>
    </section>
  );
};

const Team = () => {
  return (
    <div className="team">
      <OurTeam />
    </div>
  );
};

export default Team;
