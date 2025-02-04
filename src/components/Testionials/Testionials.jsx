import React, { useRef } from "react";
import "./Testionials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";
const Testionials = () => {
  const slider = useRef();
  let tx = 0;
  const slideForwared = () => {
    if (tx > -50) {
      tx -= 25;
    }

    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackwared = () => {
    if (tx < 0) {
      tx += 25;
    }

    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testionials">
      <img
        className="next-btn"
        src={next_icon}
        alt=""
        onClick={slideForwared}
      />
      <img
        className="back-btn"
        src={back_icon}
        alt=""
        onClick={slideBackwared}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Salma khaled</h3>
                  <span>FST, Settat</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati nihil hic dicta rem iure quod quam soluta, vel
                perspiciatis dolorem. Praesentium neque eum reiciendis tempora
                qui distinctio magni unde consequatur? Dolores aliquid
                consequatur aperiam quibusdam.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Moaud</h3>
                  <span>ESEF, Marrakech</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati nihil hic dicta rem iure quod quam soluta, vel
                perspiciatis dolorem. Praesentium neque eum reiciendis tempora
                qui distinctio magni unde consequatur? Dolores aliquid
                consequatur aperiam quibusdam.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Amal Cherqui</h3>
                  <span>FAC, Casablanca</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati nihil hic dicta rem iure quod quam soluta, vel
                perspiciatis dolorem. Praesentium neque eum reiciendis tempora
                qui distinctio magni unde consequatur? Dolores aliquid
                consequatur aperiam quibusdam.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Noufel Elhamed</h3>
                  <span>ENSA, Kenitra</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati nihil hic dicta rem iure quod quam soluta, vel
                perspiciatis dolorem. Praesentium neque eum reiciendis tempora
                qui distinctio magni unde consequatur? Dolores aliquid
                consequatur aperiam quibusdam.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testionials;
