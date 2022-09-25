import React from "react";
import "./Team.css";
import TeamImg from "./imgs/Our Team.svg";
import MostafaKadry from "./imgs/Moustafa Kadry.png";
import AhmedHassan from "./imgs/Ahmed Hassan.png";
import AliWazir from "./imgs/Ali Wazir.png";
import AmrSalah from "./imgs/Amr Salah.png";
import DaliaMohamed from "./imgs/Dalia Mahmoud.png";
import EmanMohammed from "./imgs/Eman Mohammed.png";
import Eslam from "./imgs/Eslam Ashraf.png";
import MahmoudIbrahim from "./imgs/Mahmoud Ibrahim.png";
import MaiAhmed from "./imgs/Mai Ahmed.png";
import Rabaa from "./imgs/Rabaa Wazeer.png";
const OurTeam = () => {
  return (
    <section className="ourTeam-section d-flex justify-content-between align-items-center">
      <div>
        <h2 className="w-75">Our Team</h2>
        <p className="w-75 lead lh-lg my-4">
          We strive for excellence in everyday interactions. Contact us We are
          committed to helping people and organizations change more effectively
          Wazwork is a team of dynamic.
        </p>
        <button className="contact-btn">Contact us</button>
      </div>
      <div>
        <img alt="TeamImg" src={TeamImg} />
      </div>
    </section>
  );
};

const PersonalCard = ({ img, name, title }) => {
  return (
    <div className="personal-card col-3 py-4">
      <div className="img-container">
        <img src={img} alt="" />
      </div>
      <div className="info py-2">
        <h3>{name}</h3>
        <h5>{title}</h5>
      </div>
    </div>
  );
};

const TeamMempers = () => {
  return (
    <section className="members row text-center">
      <div className="members-title py-5">
        <h1>Meet Our Team</h1>
      </div>
      <PersonalCard img={AliWazir} name="Ali Wazir" title="Ai Engineer" />
      <PersonalCard img={AmrSalah} name="Amr Salah" title="Ui/Ux Designer" />
      <PersonalCard
        img={MostafaKadry}
        name="Mostafa Kadry"
        title="Web developer"
      />

      <PersonalCard img={Eslam} name="Eslam Ashraf" title="Web Developer" />
      <PersonalCard
        img={AhmedHassan}
        name="Ahmed Hassan"
        title="Graphic Designer"
      />
      <PersonalCard img={Rabaa} name="Rabaa Wazeer" title="Data analyst" />
      <PersonalCard img={MaiAhmed} name=" Mai Ahmed" title="Front End" />
      <PersonalCard img={EmanMohammed} name=" Eman Mohammed" title="Back End" />
      <PersonalCard
        img={DaliaMohamed}
        name="Dalia Mahmoud"
        title="Web Developer"
      />
      <PersonalCard
        img={MahmoudIbrahim}
        name="Mahmoud Ibrahim"
        title="Web Penetration Test"
      />
    </section>
  );
};

const Team = () => {
  return (
    <div className="team">
      <OurTeam />
      <TeamMempers />
    </div>
  );
};

export default Team;
