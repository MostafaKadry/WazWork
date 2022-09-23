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
import wedesign from "./imgs/SVG/we design and build.png";
import whywazwork from "./imgs/SVG/Why Wazwork.png";

const Main = () => {
  return (
    <section className="main-section d-flex justify-content-between align-items-center">
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
        <img alt="" className="" src={HomePage} />
      </div>
    </section>
  );
};

const WhoAreWe = () => {
  return (
    <section className="who-section py-5 my-5 d-flex justify-content-between align-items-center">
      <div>
        <img alt="" className="" src={WhoLogo} />
      </div>
      <div>
        <h2 className="w-50 m-auto">who we are ?</h2>
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

const Services = () => {
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

const WeDesign = () => {
  return (
    <section className="wedesign-section d-flex justify-content-between align-items-center">
      <div>
        <h2 className="w-75 pt-5 mt-5">
          we design and build innovative solutions for our trusted partenars
        </h2>
        <p className="w-75 lead lh-lg my-4">
          Wazwork provides specialized and responsive technical consulting
          services for companies and agencies of all sizes. It also has teams
          that contain professional designers and programmers to do business
          such as web, design, advertising, application programming, data
          analysis, artificial intelligence....etc. And you can browse many
          projects on wazwork.
        </p>
      </div>
      <div>
        <img alt="" className="" src={wedesign} />
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <div className="home">
      <Main />
      <WhoAreWe />
      <Services />
      <WeDesign />
    </div>
  );
};

export default Home;
