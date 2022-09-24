import React from "react";
import "./Team.css";
import TeamImg from "./imgs/Our Team.svg";
import MostafaKadry from "./imgs/Moustafa Kadry.png";
import AhmedHassan from "./imgs/Ahmed Hassan.png";
import AliWazir from "./imgs/Ali Wazir.png";
import AmrSalah from "./imgs/Amr Salah.png";
import DaliaMohamed from "./imgs/Dalia Mahmoud.png";
import EmanMohammed from "./imgs/Eman Mohammed.png";
import EslamAshraf from "./imgs/Eslam Ashraf.png";
import MahmoudIbrahim from "./imgs/Mahmoud Ibrahim.png";
import MaiAhmed from "./imgs/Mai Ahmed.png";
import RabaaWazeer from "./imgs/Rabaa Wazeer.png";
const Head = () => {
  return (
    <div className="row products-head px-3 mx-0">
      <div className="col-md-6">
        <h2>Our Team</h2>
        <p>
          We strive for excellence in every day interactions. Contact us we are
          committed to helping peaple and organizations change more effectively
          WazWork is a team of dynamic
        </p>
      </div>
      <div className="col-md-6">
        <img src={TeamImg} alt="TeamImg" className="w-100" />
      </div>
    </div>
  );
};
const Members = () => {
  return (
    <section id="members">
      <h1>Meet our team</h1>
      <div class="container row text-center">
        <div class="member col-lg-3 col-md-6 col-sm-6">
          <img src={AliWazir} alt="member1" />
          <h1>Ali Wazir</h1>
          <p>Ai Engineer</p>
        </div>
        <div class="member  col-lg-3 col-md-6 col-sm-6">
          <img src={AmrSalah} alt="member2" />
          <h1>Amr Salah</h1>
          <p>UI/UX design</p>
        </div>
        <div class="member  col-lg-3 col-md-6 col-sm-6">
          <img src={AhmedHassan} alt="member3" />
          <h1>Ahmed Hassan</h1>
          <p>Graphic Designer</p>
        </div>
        <div class="member  col-lg-3 col-md-6 col-sm-6">
          <img src={RabaaWazeer} alt="member4" />
          <h1>Rabaa Wazeer</h1>
          <p>Data Analysis</p>
        </div>
        <div class="member  col-lg-3  col-md-6 col-sm-6">
          <img src={DaliaMohamed} alt="member5" />
          <h1>Dalia Mahmoud</h1>
          <p>Frontend developer</p>
        </div>
        <div class="member  col-lg-3 col-md-6 col-sm-6 ">
          <img src={EslamAshraf} alt="member6" />
          <h1>Eslam Ashraf</h1>
          <p>Web developer</p>
        </div>

        <div class="member  col-lg-3  col-md-6 col-sm-6">
          <img src={MostafaKadry} alt="member7" style={{ width: "200px" }} />
          <h1>Moustafa Kadry</h1>
          <p>Fullstack Web Developer</p>
        </div>

        <div class="member  col-lg-3  col-md-6 col-sm-6">
          <img src={MahmoudIbrahim} alt="member8" />
          <h1>Mahmoud Ibrahim</h1>
          <p>Web Penetration Testing</p>
        </div>
        <div class="member  col-lg-3  col-md-6 col-sm-6">
          <img src={MaiAhmed} alt="member8" />
          <h1>Mai Ahmed</h1>
          <p>Frontend developer</p>
        </div>
        <div class="member  col-lg-3  col-md-6 col-sm-6">
          <img src={EmanMohammed} alt="member8" />
          <h1>Eman Mohammed</h1>
          <p>backend developer</p>
        </div>
      </div>
    </section>
  );
};
const Team = () => {
  return (
    <>
      <Head />
      <Members />
    </>
  );
};

export default Team;
