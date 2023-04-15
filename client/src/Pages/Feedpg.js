import Navbar from "../components/UI/Navbar";
import Feed from "../components/feedpg/Feed";
import FeedAll from "../components/feedpg/FeedAll";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import { useState, useEffect } from "react";
import Rightbar from "../components/feedpg/Rightbar";
import Sidebar from "../components/feedpg/Sidebar";
import Add from "../components/feedpg/Add";
import axios from "axios";
import { useHistory } from "react-router";
function Feedpage() {
  let navigate = useHistory();
  const [blogs, setBlogs] = useState([]);
  const [userdata, setUserdata] = useState({});
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    let id = JSON.parse(localStorage.getItem("userInfo"));
    console.log(id);
    const res = await axios.get(
      `http://localhost:5000/api/blog/post/${id._id}`
    );
    // const res =await  axios.get(`/api/blog/post/${id}`)
    const data = res.data;
    console.log(data.blogs);
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
  const fetchdata = async () => {
    let id = JSON.parse(localStorage.getItem("userInfo"));
    const ress = await axios.get(
      `http://localhost:5000/api/user/getuser/${id._id}`
    );
    // const ress=await axios.get(`/api/user/getuser/${id}`);
    const d = ress.data;
    setUserdata(d.data);
  };
  useEffect(() => {
    if (!JSON.parse(localStorage.getItem("userInfo", "token")))
      navigate.push("/login");

    fetchPosts();
    fetchdata();
    fetchallblogs();
  }, []);
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
            <Sidebar
              setMode={setMode}
              mode={mode}
              setSwitchfeed={setSwitchfeed}
              switchfeed={switchfeed}
            />
            {!switchfeed ? (
              <FeedAll blogsall={blogsall} fetchposts={fetchallblogs} />
            ) : (
              <Feed blogs={blogs} user={userdata} fetchposts={fetchPosts} />
            )}
            <Rightbar />
          </Stack>
          <Add
            user={userdata}
            fetchposts={fetchPosts}
            fetchallblogs={fetchallblogs}
          />
        </Box>
      </ThemeProvider>
    </>
  );
}

export default Feedpage;

