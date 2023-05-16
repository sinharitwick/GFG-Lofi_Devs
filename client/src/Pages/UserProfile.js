import React, { useEffect, useState } from "react";
import "./UserProfile.css";
import Navbar from "../components/UI/Navbar";
import Post from "../components/post/post";
import { Link } from "react-router-dom";
import Wcard from "../WeatherComp/Wcard";
const UserProfile = () => {
  const user = JSON.parse(localStorage.getItem("userInfo"));
  const feedsInitial = [];
  const [feeds, setFeeds] = useState(feedsInitial);
  const getFeeds = async () => {
    //API call
    const response = await fetch("http://34.131.168.190:5000/api/feed/fetchallfeeds", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();
    console.log(json);
    setFeeds(json);
  };

  console.log("hello");

  useEffect(() => {
    getFeeds();
  }, []);

  //chat access page

  return (
    <>
      <Navbar />
      <div className="user-profile">
        <div className="user-info">
          <img src={user.pic} alt="User avatar" className="avatar" />
          <h3 className="username">{user.name}</h3>
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
            <p className="detail-title">{user.email} </p>
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
      <div>
        <h3>Posts</h3>
        <div className="userfeed">
          <div className="feedWrapper">
            {/* <Share /> */}
            {feeds.map((p) => (
              <Post key={p.id} post={p} />
            ))}
          </div>
        </div>
        <Wcard />
      </div>
    </>
  );
};

export default UserProfile;
