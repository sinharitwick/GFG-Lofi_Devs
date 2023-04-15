import React from 'react'
import { Link } from "react-router-dom";
import Navbar from '../components/UI/Navbar';
import "./profile.css";
// import axios from "axios";
function profilePage() {
  const user = JSON.parse(localStorage.getItem("userInfo"));
  
  return (
    <div className='user-page'>
      <Navbar />
      <div className="user-container">
        <div className="profile-card">
          <div className='cover-pic'></div>
          <div className="profile-img">
          <img src={user.pic} className='profile-pic' alt='profile-pic'/>
          </div>
          <div className='user-info'>
          <p className='user-name'>{user.name}</p>
          <p className='user-city'>Avenger</p>
          <div className="chat-info">
          <p><Link to="/chats"><button className='messagebtn'>Message</button></Link></p>
          <p className='user-join'>2020 jan</p>
         </div>
          </div>
        <div className="user-feed">

        </div>
        </div>
      </div>
    </div>
  )
}

export default profilePage;
