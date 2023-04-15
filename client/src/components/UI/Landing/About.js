import React from "react";
import Fade from 'react-reveal/Fade';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#c5d79f] text-300'>
    <Fade bottom>

      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#155705]">Services We Offer</p>
          {/* <p className='py-4'>// These are the technologies I've worked with</p> */}
        </div>
        <div className='w-full grid grid-cols-3 sm:grid-cols-3 gap-4 text-center py-8'>
          <div>
            <img className='w-60 mx-auto' src={process.env.PUBLIC_URL + '/postimg.png'} alt="heroimg" />
            <p className="font-extralight text-2xl">POSTS</p>
          </div>
          <div>
            <img className='w-60 mx-auto' src={process.env.PUBLIC_URL + '/utilimg.png'} alt="utilimg" />
            <p className="font-extralight text-2xl">UTILITIES</p>
          </div>
          <div>
            <img className='w-60 mx-auto' src={process.env.PUBLIC_URL + '/chatimg.png'} alt="chatimg" />
            <p className="font-extralight text-2xl">CHAT SYSTEM</p>
          </div>
        </div>
      </div>
    </Fade>
    </div>
  );
};

export default About;
