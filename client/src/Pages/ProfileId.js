import React, { useEffect, useState } from "react";
import "./UserProfile.css";
import Navbar from "../components/UI/Navbar";
import { Link, useParams } from "react-router-dom";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("userInfo"));
  const { userName } = useParams();

  const [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/user?search=${userName}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
          // "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
      setUserData(data);
      console.log(userName);
    };
    fetchData();
  }, [userName,user.token]);

  if (!userData) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Navbar />
      <div className="user-profile">
        <div className="user-info">
          <img src={userData[0].pic} alt="User avatar" className="avatar" />
          <h3 className="username">{userData[0].name}</h3>
          <p className="user-description">
            Agriculture enthusiast looking for an Agritech startup
          </p>
        </div>

        <div className="user-details">
          <div className="detail">
            <p className="detail-title">Location</p>
            <p className="detail-value">San Francisco, CA</p>
          </div>
          <div className="detail">
            <p className="detail-title">{userData[0].email} </p>
          </div>
          <div className="detail">
            <p className="detail-title">Member since</p>
            <p className="detail-value">January 2020</p>
          </div>
          <div className="chatUser">
            <Link to="/chats">
              <button>Start Chat</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;