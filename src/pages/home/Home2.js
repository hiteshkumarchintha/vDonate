import React from "react";
import donate4 from "../img/donate4.png";
import { Link } from "react-router-dom";
import "./home2.css";

const Home2 = () => {
  return (
    <>
      <div className="bodyfont">
        <div className="showcase-area">
          <div className="container2">
            <div className="left">
              <div className="big-title">
                <h1>Look what we</h1>
                <h1>can do together.</h1>
              </div>
              <p className="text">
                Don’t throw them out, Whether you’re eating at home or out at a
                restaurant, don’t let leftover edible food go to waste in the
                trash or compost bin. At restaurants, get a box, or better yet,
                bring your own container. Just don’t forget it on the table when
                you leave. After a home-cooked meal, pack up the leftovers.
                Label the leftovers and <strong>DONATE TO US</strong>
              </p>
              <div className="cta">
                <Link to="/donate" className="Dbtn2">
                  Donate Now
                </Link>
              </div>
            </div>

            <div className="right">
              <img src={donate4} alt="" className="person" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home2;
