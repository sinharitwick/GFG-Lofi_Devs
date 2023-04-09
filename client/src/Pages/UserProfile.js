import React, {useEffect,useState} from 'react';
import './UserProfile.css'
import Navbar from '../components/UI/Navbar'
// import Post from "../components/post/post";
// import { Posts } from "../dummyData";
import { Link } from 'react-router-dom';

const UserProfile = () => {

  const host = "http://localhost:5000";
  const usersInitial = [];
  const [users, setUsers] = useState(usersInitial);
  const getUsers = async () => {
    //API call
    const response = await fetch(`${host}/api/auth/getuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        //   "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJkNjZlZjA2NTYyN2Y2NmFlOTM3MGIzIn0sImlhdCI6MTY1ODIyMDM2OX0.fyV7JLu980KmYlYwQi3YiveaAif1zQxhRxH0DEwJDuA"
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    console.log(json);
    setUsers(json);
  };

  console.log("hello");

  useEffect(() => {
    getUsers();
  }, []);

  const feedsInitial = [];
  const [feeds, setFeeds] = useState(feedsInitial);
  const getFeeds = async () => {
    //API call
    const response = await fetch(`${host}/api/feed/fetchallfeeds`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        //   "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJkNjZlZjA2NTYyN2Y2NmFlOTM3MGIzIn0sImlhdCI6MTY1ODIyMDM2OX0.fyV7JLu980KmYlYwQi3YiveaAif1zQxhRxH0DEwJDuA"
        "auth-token": localStorage.getItem("token"),
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

  return (
    <>
      <Navbar />
      <div className="user-profile">
        <div className="user-info">
          <img
            src={process.env.PUBLIC_URL + '/user.png'}
            alt="User avatar"
            className="avatar"
          />
          <h3 className="username">{users.name}</h3>
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
            <p className="detail-title">{users.email} </p>
            <p className="detail-value">
              <a href='https://www.gmail.com' target='_blank'>example@gmail.com</a>
            </p>
          </div>
          <div className="detail">
            <p className="detail-title">Member since</p>
            <p className="detail-value">January 2020</p>
          </div>
          <div className='chatUser'>
            <Link to="/chats"><button>Start Chat</button></Link>
          </div>
        </div>
      </div>
      <div>
        <h3>Posts</h3>
        <div className="userfeed">
          <div className="feedWrapper">
            {/* <Share /> */}
            {/* {feeds.map((p) => (
              <Post key={p.id} post={p} />
            ))} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
