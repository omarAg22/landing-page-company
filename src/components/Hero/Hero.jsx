import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";
import { Link } from "react-scroll";
const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Innovate – Secure – Transform</h1>
        <p>
          At <strong>Kadir Technologies</strong>, we empower businesses with
          cutting-edge IT solutions, seamless CRM/ERP integrations, and robust
          cybersecurity services. Our expertise drives digital transformation,
          ensuring efficiency, security, and growth. Plus, with{" "}
          <strong>Maxe</strong>, our all-in-one convenience app, we bring smart
          technology to everyday life. Partner with us to future-proof your
          business and stay ahead in the digital era.
        </p>
        <Link
          className="btn"
          to="program"
          smooth={true}
          offset={-260}
          duration={500}
        >
          Explore more <img src={dark_arrow} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
