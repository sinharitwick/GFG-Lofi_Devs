import React from "react";
import Fade from "react-reveal/Fade";
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
              
              Chat feature can improve communication and collaboration among farmers. By sharing information, discussing agricultural practices, and exchanging ideas, farmers can learn from each other, improve farming techniques, and stay up-to-date with latest trends and technologies. This feature can also foster a sense of community and support, promoting knowledge sharing, networking, and growth in the agricultural sector.
            </p>
          </div>
        </div>

        <div className="landing-post">
          <div className="uti-text textL">
            <h2 className="abouthead">Crop Advisor</h2>
            <p className="aboutpara">
            The Crop Advisor utility feature can assist farmers in making informed decisions about the best crop to grow. The feature suggests the most suitable crop for a particular region based on various factors such as climate, soil type, and environmental factors, which can help optimize yields and minimize losses. The software also provides information on best practices for planting, harvesting, pest management, and other essential agricultural practices, enabling farmers to make better decisions and increase their productivity and profitability.
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
              src={process.env.PUBLIC_URL + "/weather.jpg" }
            />{" "}
          </div>
          <div className="uti-text textR">
            <h3  className="abouthead">Weather System </h3>
            <p className="aboutpara">
              Our farmer utilities software includes weather forecasting to
              provide farmers with accurate information on weather conditions
              that affect agriculture. This feature enables farmers to make
              informed decisions about planting, harvesting, and managing crops,
              ultimately improving their yields and profits.
            </p>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default About;
