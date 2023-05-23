import React from "react";
import Fade from "react-reveal/Fade";
import { Link } from 'react-router-dom'
import "./About.css";
const About = () => {
  return (
    <div name="about" className=" bg-[#e3e3e3] text-300 Aboutpg">
      <Fade bottom>
        <div className="pb-8 pt-4">
          <p className="text-4xl mb-3 mt-4 font-bold inline border-b-4 border-[#155705]">
            Services we offer
          </p>
        </div>
        <div className="landing-post">
          <div className="uti-img imgL">
            <img
              className="abt-photo"
              src={process.env.PUBLIC_URL + "/chatimg.png"}
            />{" "}
          </div>
          <div className="uti-text textR">
            <h2 className="abouthead">Chat System</h2>
            <p className="aboutpara">
              Chat feature can improve communication and collaboration among
              farmers. By sharing information, discussing agricultural
              practices, and exchanging ideas, farmers can learn from each
              other, improve farming techniques, and stay up-to-date with latest
              trends and technologies. This feature can also foster a sense of
              community and support, promoting knowledge sharing, networking,
              and growth in the agricultural sector.
            </p>
          </div>
        </div>

        <div className="landing-post landpost">
          <div className="uti-text textL">
            <h2 className="abouthead">Crop Advisor</h2>
            <p className="aboutpara">
              The Crop Advisor utility feature can assist farmers in making
              informed decisions about the best crop to grow. The feature
              suggests the most suitable crop for a particular region based on
              various factors such as climate, soil type, and environmental
              factors, which can help optimize yields and minimize losses. The
              software also provides information on best practices for planting,
              harvesting, pest management, and other essential agricultural
              practices, enabling farmers to make better decisions and increase
              their productivity and profitability.
            </p>
          </div>
          <div className="uti-img imgR">
            <img
              className="abt-photo"
              src={process.env.PUBLIC_URL + "/utilimg.png"}
            />{" "}
          </div>
        </div>

        <div className="landing-post">
          <div className="uti-img imgL">
            <img
              className="abt-photo"
              src={process.env.PUBLIC_URL + "/weather.jpg"}
            />{" "}
          </div>
          <div className="uti-text textR">
            <h3 className="abouthead">Weather System </h3>
            <p className="aboutpara">
              Our farmer utilities software includes weather forecasting to
              provide farmers with accurate information on weather conditions
              that affect agriculture. This feature enables farmers to make
              informed decisions about planting, harvesting, and managing crops,
              ultimately improving their yields and profits.
            </p>
          </div>
        </div>
        <div className="landing-post landpost">
          <div className="uti-text textL">
            <h2 className="abouthead">Land Lease System</h2>
            <p className="aboutpara">
              A land lease system for farming is a contractual agreement between
              a FarmStack and a farmer, where the FarmStack grants the farmer
              the right to use a specific piece of land for agricultural
              purposes in exchange for rent or other agreed-upon terms. This
              arrangement allows individuals or organizations who own land but
              do not wish to farm it themselves to lease it to FarmStack and We
              lease it Farmer who have the knowledge, resources, and desire to
              cultivate the land.
            </p>
            <div className="land">
            <p className='FbtnL'><Link to="/listing"><button className="border-2 flex px-4 py-2 my-4 mx-auto border-[#000000] items-center hover:border-[#155705] duration-300">View Land &#8594; </button></Link></p>
            </div>
          </div>
          <div className="uti-img imgR">
            <img
              className="abt-photo"
              src={process.env.PUBLIC_URL + "/landLease.jpg"}
            />{" "}
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default About;
