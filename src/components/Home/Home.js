import React from "react";
import "./Home.css";
import HomePage from "./imgs/SVG/Home Page.png";
import WhoLogo from "./imgs/SVG/Who we are.png";
import uiUx from "./imgs/Services/ui-ux.png";
import graphicDesign from "./imgs/Services/Graphic design.png";
import marketing from "./imgs/Services/Marketing.png";
import dataAnalysis from "./imgs/Services/Data Analysis.png";
import dataScience from "./imgs/Services/Data Science.png";
import frontend from "./imgs/Services/Frontend.png";
import backend from "./imgs/Services/Backend.png";
import ai from "./imgs/Services/Ai.png";

const MainSection = () => {
  return (
    <section className="main-section d-flex justify-content-between align-items-center">
      <div>
        <h1 className="">
          Discover your perfect service and the prices that suit your business.
        </h1>
        <p className="w-75 lead lh-lg my-4">
          Every business needs from us an integrated coverage in order to
          achieve the goal of our clients. Where better customer service is our
          goals.
        </p>
        <button className="contact-btn">Contact us</button>
      </div>
      <div>
        <img alt="" className="" src={HomePage} />
      </div>
    </section>
  );
};

const WhoSection = () => {
  return (
    <section className="who-section py-5 my-5 d-flex justify-content-between align-items-center">
      <div>
        <img alt="" className="" src={WhoLogo} />
      </div>
      <div>
        <h1 className="w-50 m-auto">who we are ?</h1>
        <p className="w-50 m-auto lh-lg my-4">
          Behind our Golden Arches is a global team,
          designers,programmers,........etc and numbers of there projects others
          who make up who we are as a brand. It’s the entire Wazwork team that
          makes your business more perfect. Across our business we strive to
          lift up the service for our clients.
        </p>
      </div>
    </section>
  );
};

const Service = ({ icon_container, title, content, color }) => {
  return (
    <div className="service">
      <div className="icon-container" style={{ backgroundColor: color }}>
        <img className="icon" src={icon_container} alt="" />
      </div>
      <h3 className="title">{title}</h3>
      <div className="content text-black-50">{content}</div>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <div className="services-section">
      <div className="services-container">
        <Service
          color={"#9c19c9"}
          icon_container={uiUx}
          title={"UI/UX Design"}
          content={
            "Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,"
          }
        />
        <Service
          color={"#ffaf00"}
          icon_container={graphicDesign}
          title={"Graphic Design"}
          content={
            "Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,"
          }
        />
        <Service
          color={"#ff4e6e"}
          icon_container={marketing}
          title={"Marketing"}
          content={
            "Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,"
          }
        />
        <Service
          color={"#1975c9"}
          icon_container={dataAnalysis}
          title={"Data Analysis"}
          content={
            "Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,"
          }
        />
      </div>
      <div className="services-container">
        <Service
          color={"#ffaf00"}
          icon_container={ai}
          title={"Artificial Inteligence"}
          content={
            "Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,"
          }
        />
        <Service
          color={"#ff4e6e"}
          icon_container={frontend}
          title={"Frontend Web Development"}
          content={
            "Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,"
          }
        />
        <Service
          color={"#1975c9"}
          icon_container={backend}
          title={"Backend Web Development"}
          content={
            "Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,"
          }
        />
        <Service
          color={"#9c19c9"}
          icon_container={dataScience}
          title={"Data Science"}
          content={
            "Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,"
          }
        />
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="home">
      <MainSection />
      <WhoSection />
      <ServicesSection />
    </div>
  );
};

export default Home;
