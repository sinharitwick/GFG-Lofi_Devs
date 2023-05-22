import React from "react";
import "./Aboutus.css";
import Navbar from "../components/UI/Navbar";
import Desimg from "../whatweDo.png";
import Slidecard from "../components/Aboutus/Slidecard";
import Img1 from "../manure.png";
import Img2 from "../seed.png";
import Img3 from "../farming.png";
import Img4 from "../soil.png";
import Img11 from "../manureBg.png";
import Img22 from "../seedBg.png";
import Img33 from "../farmingBg.png";
import Img44 from "../soilBg.png";
import Promotion from "../promotion.png";
import CardModal from "../components/Aboutus/cardmodal";
function Aboutus() {
  return (
    <div className="about">
      <div className="abtImg">
        <Navbar />
        <p className="des">
          Nurturing a Connected Community of Farmers with Innovative Tools
        </p>
      </div>
      <div className="abtDes">
        <div className="Desimg">
          <img src={Desimg} />
        </div>
        <div className="whatwedo">
          <p style={{ fontSize: "3rem", fontfamily: "Italiana",textAlign:'left' }}>what we do</p>
          <p>
            At FarmStack, our objective is to revolutionize the way farmers
            interact, collaborate, and access vital farming resources. We aim to
            bridge the gap between farmers by providing them with a powerful
            online platform where they can connect, share, and learn from each
            other's experiences. Our goal is to empower farmers with advanced
            tools and information, such as the crop advisor and weather forecast
            features, to make informed decisions about their farming practices.
            We also strive to keep farmers updated with the latest government
            schemes, ensuring they have access to valuable financial support and
            subsidies. FarmStack's ultimate objective is to improve farmers'
            livelihoods, boost their productivity, and create a supportive and
            inclusive farming community that thrives on knowledge-sharing and
            collaboration. We believe that by leveraging technology, we can
            address the challenges faced by farmers and contribute to the growth
            and sustainability of the agricultural sector.<br/>
            <ul style={{textAlign:'left',listStyleType: 'square'}}>
              <li>Connecting all Farmer and Experts</li>
              <li>Chat system</li>
              <li>Crop Predictor</li>
              <li>Weather Forecast of 5 Days</li>
              <li>Land Lease for Period Agreement</li>

            </ul>

          </p>
        </div>
      </div>
      <div className="abtfeatures">
        <p className="abtfeaturesdes">Our Features</p>
        <div className="abtslider">
          <CardModal
            img={Img1}
            title="Manure"
            img2={Img11}
            mdes="Manure is important in growing plants because it enriches the soil with essential nutrients, improves soil structure, enhances water retention, promotes microbial activity, and contributes to sustainable and organic farming practices."
            mtext1="How to choose best Manure"
            mtext="Choose manure with high nutrient content from organic sources. Opt for composted or aged manure, consider availability, and seek local recommendations for the best types suited to your crops and region."
          />
          <CardModal
            img={Img2}
            title="Seed"
            img2={Img22}
            mdes="Seeds are essential for farming, serving as the starting point of plant growth. They contain the genetic information needed to produce crops, ensuring food security and agricultural sustainability."
            mtext1="How to choose Best seeds"
            mtext="Consider seed source, variety suitability, high germination rate, disease resistance, and adaptability to local conditions. Seek recommendations from experts and choose reputable suppliers for quality assurance."
          />
          <CardModal
            img={Img3}
            title="Farming"
            img2={Img33}
            mdes="Farming is the cultivation of crops and rearing of animals for food and resources, involving land preparation, planting, animal care, and harvesting. It sustains populations and shapes our environment."
            mtext1="How to do farming"
            mtext="Start by researching and planning. Learn about crops suitable for your area, acquire basic tools and knowledge, prepare the soil, select quality seeds, and regularly tend to your plants while seeking guidance from experienced farmers."
          />
          <CardModal
            img={Img4}
            title="Soil"
            img2={Img44}
            mdes="Soil for farming should be fertile, well-drained, and have a balanced texture (clay, silt, sand). It should contain essential nutrients, organic matter, and a pH level suitable for the desired crops."
            mtext1="How Check soil quality"
            mtext="To assess soil quality, observe its texture by feeling it, conduct a simple jar test to determine the proportion of sand, silt, and clay, assess drainage, pH level, and conduct soil tests for nutrient levels and organic matter content."
          />
        </div>
      </div>
      <div className="promotion">
        <div className="prDes">
          <p className="prDes1">Thousands of people trust our technology </p>
          <p className="prDes2">
            Join the amazing farming that we provide for you!
          </p>
        </div>
        <div className="prImg">
          <img src={Promotion} />
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
