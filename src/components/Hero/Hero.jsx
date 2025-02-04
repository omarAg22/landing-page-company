import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";
import { Link } from "react-scroll";
const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Lorem ipsum dolor sit amet, consectetur adipisicing.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ex
          minima autem qui quos recusandae vitae reprehenderit dolorum iusto
          officia, dolorem mollitia sequi error quas aliquam harum nisi
          explicabo, facilis vel neque eveniet eligendi. Adipisci officia odit
          illo consequuntur! Reiciendis.
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
