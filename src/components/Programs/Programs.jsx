import React from "react";
import "./Programs.css";
import program_1 from "../../assets/prog-1.jpg";
import program_2 from "../../assets/prog-1.jpg";
import program_3 from "../../assets/prog-1.jpg";
import program_icon_1 from "../../assets/it-service.png";
import program_icon_2 from "../../assets/crm.png";
import program_icon_3 from "../../assets/shopping-cart.png";

const Programs = () => {
  return (
    <div className="programs">
      <div className="program">
        <img src={program_1} alt="" />
        <div className="caption">
          <img src={program_icon_1} alt="" />
          <p>IT Solutions</p>
        </div>
      </div>
      <div className="program">
        <img src={program_2} alt="" />
        <div className="caption">
          <img src={program_icon_2} alt="" />
          <p>CRM & ERP Solutions</p>
        </div>
      </div>
      <div className="program">
        <img src={program_3} alt="" />
        <div className="caption">
          <img src={program_icon_3} alt="" />
          <p>E-commerce Services</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;
