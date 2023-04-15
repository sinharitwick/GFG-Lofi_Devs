import {React, useState, useEffect } from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import Typewriter from "typewriter-effect"
import './Landing.css'
import Contact from './Landing/Contact'
import About from './Landing/About'
import Fade from 'react-reveal/Fade';

function Landing() {
  return (
    <div className='landing'>
        <Navbar />
        <Fade bottom>
        <div className="container-landing">
            <div className="left">
                <h1 id="msg">
                  {/* <Typewriter 
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 40,
                    strings: [
                      "Welcome",
                      "to FarmStack."
                    ]
                  }} /> */}
                </h1>
                <p id="quote" className='quote'>"The ultimate goal of farming is not the growing of crops, but the cultivation and perfection of human beings." <span className='pspan'>- Masanobu Fukuoka</span> </p>
                <p className='Fbtn'><Link to="/feed"><button>Explore</button></Link></p>
            </div>
            {/* <div class="right">
                <img src={process.env.PUBLIC_URL + '/heroimg.png'} alt="" id="heroimg" />
            </div> */}
        </div>
        </Fade>
        <About />
        <Contact />
        <div className="footer">
        <div className="footer-container">
          <div className='fc-left'>
              <p><span>FarmStack</span> © 2023. All rights reserved.</p>
          </div>
          <div className='fc-right'>
              <p>Designed and Developed By <span>Lo-fi Devs</span></p>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Landing