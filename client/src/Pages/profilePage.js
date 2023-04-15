import React from 'react'
import Navbar from '../components/UI/Navbar';
import "./profile.css";
// import axios from "axios";
function profilePage({data, user}) {
  // const host = "http://localhost:5000"
  // const id = JSON.parse(localStorage.getItem("userInfo", 'token'))
  // const handlegetuser = async() => {
  //   const ures = await axios.get(`${host}/api/user/getuser/${data._id}`);
  //   console.log(ures.data);
  // }
  return (
    <div className='user-page'>
      <Navbar />
      <div className="user-container">
        <div className="profile-card">
          <img src="https://images.unsplash.com/photo-1599009876320-01a3d33c197d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8OHx8fGVufDB8fHx8&w=1000&q=80" className='cover-pic' alt="" />
          <img src="https://i.pinimg.com/736x/d0/31/68/d031686a12387f1dd901313af7a57372.jpg" className='profile-pic' alt="" />
          <p className='user-name'>Clint Barton</p>
          <p>Avenger</p>
          <a href="" className='follow-btn'>Follow</a>
          <div className='row'>
            <div>
              <p>Followers</p>
              <h2>1.25M</h2>
            </div>
            <div>
              <p>Following</p>
              <h2>25</h2>
            </div>
            <div>
              <p>Posts</p>
              <h2>1</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default profilePage;
