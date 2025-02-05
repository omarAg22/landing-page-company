import React from "react";
import "./About.css";

import about_img from "../../assets/colab.jpg";
const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img className="about-img" src={about_img} alt="" />
      </div>

      <div className="about-right">
        <h3>About Kadir Technologies</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          Kadir Technologies is a pioneering IT solutions provider, delivering
          innovative and scalable digital solutions to businesses of all sizes.
          With expertise in CRM, ERP, Cybersecurity, and SaaS development, we
          empower enterprises with cutting-edge technology that enhances
          operational efficiency and drives business growth. Our commitment to
          excellence and customer satisfaction has positioned us as a trusted
          technology partner for organizations seeking robust and future-proof
          digital transformation.
        </p>
        <p>
          At Kadir Technologies, we believe in harnessing the power of
          technology to create intelligent, secure, and seamless experiences.
          Our CRM and ERP solutions streamline business processes, while our
          cybersecurity services ensure data protection against evolving
          threats. Additionally, we take pride in owning and developing Maxe, an
          all-in-one convenience mobile and web app designed to revolutionize
          daily services, starting with food delivery, taxi services, and
          eCommerce shopping, with plans for further expansion.
        </p>
        <p>
          With a dedicated team of experts and a passion for innovation, Kadir
          Technologies continues to push the boundaries of digital
          transformation. Whether it’s developing tailored software solutions or
          securing enterprise IT infrastructures, we are committed to delivering
          reliable, high-performance, and scalable solutions that drive success
          in an ever-evolving digital world.
        </p>
      </div>
    </div>
  );
};

export default About;
