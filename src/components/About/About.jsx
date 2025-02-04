import React from "react";
import "./About.css";

import about_img from "../../assets/video-pic.jpg";
import play_icon from "../../assets/play-icon.png";
const About = ({ setShowVideo }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img className="about-img" src={about_img} alt="" />
        <img
          className="play-icon"
          src={play_icon}
          alt=""
          onClick={() => {
            setShowVideo(true);
          }}
        />
      </div>

      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
          repudiandae neque dignissimos ipsam rerum qui repellendus cum ad
          laboriosam iure hic nobis dolores vero sed minus quisquam, cupiditate
          et iusto. repudiandae neque dignissimos ipsam rerum qui repellendus
          cum ad laboriosam iure hic nobis dolores vero sed minus quisquam,
          cupiditate et iusto. et iusto. repudiandae neque dignissimos ipsam
          rerum qui repellendus cum ad laboriosam iure hic nobis dolores vero
          sed minus quisquam, cupiditate et iusto.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nobis
          numquam eveniet quaerat enim tenetur, molestiae alias eum iure nulla
          sit sequi? Sapiente, pariatur eius. numquam eveniet quaerat enim
          tenetur, molestiae alias eum iure nulla sit sequi? Sapiente, pariatur
          eius. sit sequi? Sapiente, pariatur eius. numquam eveniet quaerat enim
          tenetur, molestiae alias eum iure nulla sit sequi? Sapiente, pariatur
          eius.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt,
          provident, ad quaerat magnam, dolorem vitae autem asperiores
          dignissimos dolore quasi consectetur voluptatum. provident, ad quaerat
          magnam, dolorem vitae autem asperiores dignissimos dolore quasi
          consectetur voluptatum. magnam, dolorem vitae autem asperiores
          dignissimos dolore quasi consectetur voluptatum.
        </p>
      </div>
    </div>
  );
};

export default About;
