import React from "react";
import Fade from "react-reveal/Fade";
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
          <div className="uti-img imgL">
            <img
              className="abt-photo"
              src={process.env.PUBLIC_URL + "/postimg.png"}
            />{" "}
          </div>
          <div className="uti-text textR">
            <h2>Weather System</h2>
            <p>
              Our farmer utilities software includes weather forecasting to
              provide farmers with accurate information on weather conditions
              that affect agriculture. This feature enables farmers to make
              informed decisions about planting, harvesting, and managing crops,
              ultimately improving their yields and profits.
            </p>
          </div>
        </div>

        <div className="landing-post">
          <div className="uti-text textL">
            <h2>Crop Advisor</h2>
            <p>
              A farmer utilities software that includes a Crop Advisor feature
              can be a valuable tool for farmers to make informed decisions
              about what crop to grow. By considering various factors like
              climate, soil type, and other environmental factors, the Crop
              Advisor can suggest the most suitable crop for a particular
              region. This feature can provide farmers with relevant information
              and can help them optimize their yields and minimize potential
              losses. Additionally, the software can also provide information on
              best practices for planting and harvesting crops, as well as
              information on pest management and other important agricultural
              practices. With the right information at their fingertips, farmers
              can make better decisions about their crops, leading to greater
              productivity and profitability.
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
              src={process.env.PUBLIC_URL + "/chatimg.png"}
            />{" "}
          </div>
          <div className="uti-text textR">
            <h3>CHAT SYSTEM</h3>
            <p>
              Incorporating a chat feature in a farmer utilities software can
              greatly enhance communication and collaboration among farmers. It
              provides an opportunity for farmers to discuss various
              agricultural practices, share information on crops, livestock and
              soil health, and exchange ideas and experiences with fellow
              farmers. By facilitating such discussions, farmers can learn from
              each other, improve their farming methods and techniques, and keep
              up-to-date with the latest farming trends and technologies.
              Furthermore, the chat feature can help farmers build a sense of
              community and support, as they can connect with others who
              understand the challenges and rewards of farming. Overall, a chat
              feature in a farmer utilities software can be a powerful tool to
              promote knowledge sharing, networking and growth in the
              agricultural sector.
            </p>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default About;
