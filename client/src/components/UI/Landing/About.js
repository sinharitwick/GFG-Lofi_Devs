import React from "react";
import Fade from "react-reveal/Fade";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./About.css";
const About = () => {
  return (
    <div name="about" className=" bg-[#c5d79f] text-300 Aboutpg">
      <Fade bottom>
        <div className="pb-8 pt-4">
          <p className="text-4xl mb-3 mt-4 font-bold inline border-b-4 border-[#155705]">
            Services we offer
          </p>
        </div>
        <div className="landing-post">
          <div className="uti-img">
            <img
              className="abt-photo"
              src={process.env.PUBLIC_URL + "/postimg.png"}
            />{" "}
          </div>
          <div className="uti-text">POSTS</div>
        </div>

        <div className="landing-post">
          <div className="uti-text">UTILITIES</div>
          <div className="uti-img">
            <img
              className="abt-photo"
              src={process.env.PUBLIC_URL + "/utilimg.png"}
            />{" "}
          </div>
        </div>

        <div className="landing-post">
          <div className="uti-img">
            <img
              className="abt-photo"
              src={process.env.PUBLIC_URL + "/chatimg.png"}
            />{" "}
          </div>
          <div className="uti-text">CHAT SYSTEM</div>
        </div>
      </Fade>
    </div>
  );
};

export default About;
