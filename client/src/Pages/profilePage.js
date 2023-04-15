import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/UI/Navbar";
import { createTheme, ThemeProvider } from "@mui/material";
import "./profile.css";
import axios from "axios";
// import Feed from "../components/feedpg/Feed";
import Feed from "../components/feedpg/Feed";
import Add from "../components/feedpg/Add";
// import Post from "../components/feedpg/Post";
function ProfilePage() {
  const [blogs, setBlogs] = useState([]);
  const [userdata, setUserdata] = useState({});

  let user = JSON.parse(localStorage.getItem("userInfo"));
  const fetdata = async () => {
    let user = JSON.parse(localStorage.getItem("userInfo"));
    const res = await axios.get(`/api/blog/post/${user._id}`);
    const data = res.data;
    // console.log(data.blogs);
    setBlogs(data.blogs);
  };
  const [blogsall, setBlogsall] = useState([]);
  const fetchallblogs = async () => {
    const res = await axios.get(`http://localhost:5000/api/blog/`);
    // const res =await  axios.get(`/api/blog/`)
    const data = res.data;
    console.log(data.blogs);
    setBlogsall(data.blogs);
  };
  useEffect(() => {
    fetchallblogs();
  }, []);

  useEffect(() => {
    fetdata();
  }, []);
  console.log(blogs);

  //fetch current user all details
  const fetuser = async () => {
    let user = JSON.parse(localStorage.getItem("userInfo"));
    const res = await axios.get(`/api/user/getuser/${user._id}`);
    const data = res.data;
    // console.log(data.data);
    setUserdata(data.data);
  };

  useEffect(() => {
    fetuser();
  }, []);
  console.log(userdata);
  //fetch user
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <div className="user-page">
      <Navbar />
      <div className="user-container">
        <div className="profile-card">
          <div className="cover-pic"></div>
          <div className="profile-img">
            <img src={user.pic} className="profile-pic" alt="profile-pic" />
          </div>
          <div className="user-info">
            <p className="user-name">{user.name}</p>
            <p className="user-city">{user.email}</p>
            <div className="chat-info">
              <p>
                <Link to="/chats">
                  <button className="messagebtn">Message</button>
                </Link>
              </p>
              <p className="user-join">2020 jan</p>
            </div>
          </div>
          <p style={{ fontWeight: "bold", color: "black" }}>My post</p>
          <ThemeProvider theme={darkTheme}>
            <Add
              user={userdata}
              fetchposts={fetdata}
              fetchallblogs={fetchallblogs}
            />
          </ThemeProvider>
          <div className="user-feed">
            <ThemeProvider theme={darkTheme}>
              <Feed blogs={blogs} user={userdata} fetchposts={fetdata} />
            </ThemeProvider>
          </div>
        </div>
      </div>
    </div>
  );
}
// import Feed from '../components/feedpg/Feed';

export default ProfilePage;
