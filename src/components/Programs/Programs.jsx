import React from "react";
import "./Programs.css";
import program_1 from "../../assets/it-solution.jpg";
import program_2 from "../../assets/crm-pic.png";
import program_3 from "../../assets/cyber.jpg";
import program_4 from "../../assets/maxe.png";
import program_icon_1 from "../../assets/it-service.png";
import program_icon_2 from "../../assets/crm.png";
import program_icon_3 from "../../assets/consulting.png";
import program_icon_4 from "../../assets/speedometer.png";

const Programs = () => {
  return (
    <div className="programs">
      <div className="program">
        <img className="test" src={program_1} alt="" />
        <div className="caption">
          <img src={program_icon_1} alt="" />
          <p>IT Solutions</p>
        </div>
      </div>
      <div className="program">
        <img className="test" src={program_2} alt="" />
        <div className="caption">
          <img src={program_icon_2} alt="" />
          <p>CRM & ERP Solutions</p>
        </div>
      </div>
      <div className="program">
        <img className="test" src={program_3} alt="" />
        <div className="caption">
          <img src={program_icon_3} alt="" />
          <p>Cyber Security Services</p>
        </div>
      </div>
      <div className="program">
        <img className="test" src={program_4} alt="" />
        <div className="caption">
          <img src={program_icon_4} alt="" />
          <p>Maxe</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;
