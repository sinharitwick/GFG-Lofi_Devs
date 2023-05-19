import React from "react";
import "./Aboutus.css";
import Navbar from "../components/UI/Navbar";
import Desimg from "../whatweDo.png";
import Slidecard from "../components/Aboutus/Slidecard";
import Img1 from "../manure.png";
import Img2 from "../seed.png";
import Img3 from "../farming.png";
import Img4 from "../soil.png";
import Promotion from "../promotion.png";
function Aboutus() {
  return (
    <div className="about">
      <div className="abtImg">
        <Navbar />
        <p className="des">Short Description</p>
      </div>
      <div className="abtDes">
        <div className="Desimg"><img src={Desimg} /></div>
        <div className="whatwedo"><p style={{fontSize:'3rem',fontfamily:'Italiana',}}>what we do</p></div>
      </div>
      <div className="abtfeatures">
        <p className="abtfeaturesdes">Our Features</p>
        <div className="abtslider">
            <Slidecard img={Img1} title="Manure"/>
            <Slidecard img={Img2} title="Seed"/>
            <Slidecard img={Img3} title="Farming"/>
            <Slidecard img={Img4} title="Soil"/>
        </div>
      </div>
      <div className="promotion">
        <div className="prDes">
            <p className="prDes1">Thousands of people trust our technology </p>
            <p className="prDes2">Join the amazing farming that we provide for you!</p>
        </div>
        <div className="prImg">
            <img  src={Promotion} />
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
