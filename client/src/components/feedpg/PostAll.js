import {
  CommentOutlined,
  Delete,
  Favorite,
  FavoriteBorder,
  MoreVert,
  Share,
} from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import Comment from "./Comment";
import AddComments from "./AddComments";
import './PostAll.css'
const Post = ({ data, user, fetchposts }) => {
  // const host="http://34.131.168.190:5000"
  const host="http://localhost:5000"
  const id = JSON.parse(localStorage.getItem("userInfo", "token"));
  //   const handledelete=async()=>{
  //     const ress= await axios.delete(`${host}/api/blog/post/delete/${data._id}`);
  //     console.log(ress.data);
  //     fetchposts();
  //   }
  const [userinfo, setUserinfo] = useState({});
  const handlegetall = async () => {
    const ress = await axios.get(`${host}/api/user/getuser/${data?.user}`);
    // const ress=await axios.get(`/api/user/getuser/${data?.user}`);
    const d = ress.data;
    setUserinfo(d.data);
  };

  useEffect(() => {
    handlegetall();
  }, []);

  let date = new Date(data?.createdAt).toDateString();
  return (
    <Card sx={{ margin: 5 }} style={{boxShadow: '10px 14px 68px -28px rgba(0,0,0,0.75)'}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "green" }} aria-label="recipe">
            {userinfo?.name?.charAt(0)}
          </Avatar>
        }
        title={data?.title}
        subheader={date}
      />
      <CardMedia
        component="img"
        height="20%"
        image={data?.image}
        alt="image here"
        id="cardmedia"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {data?.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <CommentOutlined />
        </IconButton>
      </CardActions>
      {/* <AddComments/>
      <Comment/> */}
    </Card>
  );
};

export default Post;
