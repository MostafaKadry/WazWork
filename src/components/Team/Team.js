import React from "react";
import "./Team.css";
import ourTeam from "./imgs/Our Team.png";
import AhmedHassan from "./imgs/Ahmed Hassan.png";
import AliWazir from "./imgs/Ali Wazir.png";
import AmrSalah from "./imgs/Amr Salah.png";
import Dalia from "./imgs/Dalia Mahmoud.png";
import Eslam from "./imgs/Eslam Ashraf.png";
import Mahmoud from "./imgs/Mahmoud Ibrahim.png";
import Moustafa from "./imgs/Moustafa Kadry.png";
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
        <img alt="" src={ourTeam} />
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
        <h1>Meet Out Team</h1>
      </div>
      <PersonalCard img={AliWazir} name="Ali Wazir" title="Ai Engineer" />
      <PersonalCard img={AmrSalah} name="Amr Salah" title="Ui/Ux Designer" />
      <PersonalCard
        img={Moustafa}
        name="Moustafa Kadry"
        title="Web developer"
      />

      <PersonalCard img={Eslam} name="Eslam Ashraf" title="Web Developer" />
      <PersonalCard
        img={AhmedHassan}
        name="Ahmed Hassan"
        title="Graphic Designer"
      />
      <PersonalCard img={Rabaa} name="Rabaa Wazeer" title="Data analyst" />
      <PersonalCard img={Dalia} name="Dalia Mahmoud" title="Web Developer" />
      <PersonalCard
        img={Mahmoud}
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
