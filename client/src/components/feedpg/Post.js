import {  Delete, EditNote, Favorite, FavoriteBorder, MoreVert, Share, Update } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography
  
} from "@mui/material";
import axios from "axios";
import Edit from './Edit'
import Comment from "./Comment";
import AddComments from "./AddComments";
const Post = ({data,user,fetchposts}) => {
  const host="http://localhost:5000"
  const id=localStorage.getItem("auth-token");
  const handledelete=async()=>{
    const ress= await axios.delete(`${host}/api/blog/post/delete/${data._id}`);
    // const ress= await axios.delete(`/api/blog/post/delete/${data._id}`);
    console.log(ress.data);
    fetchposts();
  }
  let date=new Date(data?.createdAt).toDateString();
  return (
    <Card sx={{ margin: 5 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            {user?.name[0]}
          </Avatar>
        }
        action={
          <IconButton onClick={handledelete} aria-label="settings">
            <Delete />
          </IconButton>
        }
        
        title={data?.title}
        subheader={date}
      />
      <CardMedia
        component="img"
        height="20%"
        image={data?.image}
        alt="image here"
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
       <Edit data={data} user={user} fetchposts={fetchposts}/>
       
      </CardActions>
      {/* <AddComments/>
      <Comment/> */}
    </Card>
  );
};

export default Post;
