import React, { useEffect, useState } from "react";
import Post from "../components/post/post";
import Share from "../components/post/Share";
import "./Feed.css";
import Navbar from "../components/UI/Navbar";

function Feed() {
  // const host = "http://localhost:5000";
  const feedsInitial = [];
  const [feeds, setFeeds] = useState(feedsInitial);
  const [users,setUsers]=useState([]);
  const data = JSON.parse(localStorage.getItem("userInfo"));
  const token = data.token;
  console.log(token);
  const headers = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  const getFeeds = async () => {
    //fetching token
   

    //API call
    const response = await fetch("/api/feed/fetchallfeed", {
      method: "GET",
      headers,
    });
    const json = await response.json();
    console.log(json);
    setFeeds(json);
  };

  const getUsers = async () => {
    // const data = JSON.parse(localStorage.getItem("userInfo"));
    // const token = data.token;
    // console.log(token);
    // const headers = {
    //   "Content-Type": "application/json",
    // };

    // if (token) {
    //   headers.Authorization = `Bearer ${token}`;
    // }
    const response = await fetch("/api/user", {
      method: "GET",
      headers,
    });
    const json = await response.json();
    console.log(json);
    setUsers(json);
  };

  console.log("hello");

  useEffect(() => {
    getFeeds();
    getUsers();
  }, [feeds]);

  return (
    <>
      <Navbar />
      <div className="feed">
        <div className="feedWrapper">
          <Share />
          {/* {feeds.map((p) => {
            // return the Post component here
            return <Post key={p.id} post={p} />;
          })} */}

          {/* new one */}
            {feeds.map((post) => {
            const userd = users.find((user) => user._id === post.user);
            return <Post key={post.id} post={post} userName={userd?userd:data} />;
          })}

        </div>
      </div>

      {/* <div>
        {feeds.map((feed) => (
          <p>{feed.description}</p>
        ))}
      </div> */}
    </>
  );
}

export default Feed;
