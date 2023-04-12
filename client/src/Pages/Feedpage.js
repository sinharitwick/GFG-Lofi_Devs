// import React, { useEffect, useState } from "react";
// import Post from "../components/post/post";
// import Share from "../components/post/Share";
// import "./Feed.css";
// import Navbar from "../components/UI/Navbar";

// function Feed() {
//   // const host = "http://localhost:5000";
//   const feedsInitial = [];
//   const [feeds, setFeeds] = useState(feedsInitial);
//   const getFeeds = async () => {
//     //API call
//     const response = await fetch("/api/feed/fetchallfeed", {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//         //   "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJkNjZlZjA2NTYyN2Y2NmFlOTM3MGIzIn0sImlhdCI6MTY1ODIyMDM2OX0.fyV7JLu980KmYlYwQi3YiveaAif1zQxhRxH0DEwJDuA"
//         // "auth-token": localStorage.getItem("token"),
//         Authorization: `Bearer ${localStorage.getItem("token")}`,
//       },
//     });
//     const json = await response.json();
//     console.log(json);
//     setFeeds(json);
//   };

//   console.log("hello");

//   useEffect(() => {
//     getFeeds();
//   }, []);

//   return (
//     <>
//       <Navbar />
//       <div className="feed">
//         <div className="feedWrapper">
//           <Share />
//           {feeds.map((p) => {
//             // return the Post component here
//             return <Post key={p.id} post={p} />;
//           })}
//         </div>
//       </div>

//       {/* <div>
//         {feeds.map((feed) => (
//           <p>{feed.description}</p>
//         ))}
//       </div> */}
//     </>
//   );
// }

// export default Feed;
import Navbar from '../components/feedpg/Navbar';
import Feed from "../components/feedpg/Feed";
import FeedAll from "../components/feedpg/FeedAll";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import { useState, useEffect } from "react";
import Rightbar from '../components/feedpg/Rightbar';
import Sidebar from "../components/feedpg/Sidebar";
import Add from '../components/feedpg/Add';
import axios from "axios"
import { useNavigate } from 'react-router';
function Feedpage() {
  let navigate= useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [userdata, setUserdata] = useState({});
  const [posts, setPosts] = useState([]);
  let id=localStorage.getItem('auth-token')
  const fetchPosts = async () => {
    const res =await  axios.get(`http://localhost:5000/api/blog/post/${id}`)
    // const res =await  axios.get(`/api/blog/post/${id}`)
   const data=res.data;
    console.log(data.blogs)
    setBlogs(data.blogs);
  };
  const [blogsall, setBlogsall] = useState([])
  const fetchallblogs=async()=>{
    const res =await  axios.get(`http://localhost:5000/api/blog/`)
    // const res =await  axios.get(`/api/blog/`)
   const data=res.data;
    console.log(data.blogs)
    setBlogsall(data.blogs);
  }
  const fetchdata=async()=>{
      const ress=await axios.get(`http://localhost:5000/api/user/getuser/${id}`);
      // const ress=await axios.get(`/api/user/getuser/${id}`);
      const d=ress.data;
      setUserdata(d.data);
  }
  useEffect(() => {
// if(!localStorage.getItem('auth-token'))
// navigate('/login');
  
    fetchPosts();
    fetchdata();
    fetchallblogs()
  }, [])
  const [switchfeed, setSwitchfeed] = useState(false);
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
   <>
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar setMode={setMode} mode={mode} setSwitchfeed={setSwitchfeed} switchfeed={switchfeed}/>
          {!switchfeed? <FeedAll blogsall={blogsall}   fetchposts={fetchallblogs}/>: <Feed blogs={blogs} user={userdata}  fetchposts={fetchPosts} /> }
          <Rightbar />
        </Stack>
        <Add user={userdata} fetchposts={fetchPosts}/>
      </Box>
    </ThemeProvider>
   </>
  );
}

export default Feedpage;