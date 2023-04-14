import {
    Avatar,
    Button,
    ButtonGroup,
    Fab,
    Modal,
    Stack,
    styled,
    TextField,
    Tooltip,
    Typography,
    IconButton,
  } from "@mui/material";
  import {  Delete, EditNote, Favorite, FavoriteBorder, MoreVert, Share, Update } from "@mui/icons-material";

  import React, { useState } from "react";
  import axios from "axios";
  import {
    Add as AddIcon,
    DateRange,
    EmojiEmotions,
    Image,
    PersonAdd,
    VideoCameraBack,
  } from "@mui/icons-material";
  import { Box } from "@mui/system";
  
  const SytledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });
  
  const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px",
  });
 
  const Edit = ({user,fetchposts,data}) => {

    const [post, setPost] = useState({title:data?.title,description:data?.description,imageurl:data?.image})
    const host="http://localhost:5000"
    const handleupdate=async()=>{
      const res=await axios.put(`${host}/api/blog/update/${data._id}`,{title:post.title,description:post.description,image:post.imageurl})
      // const res=await axios.put(`/api/blog/update/${data._id}`,{title:post.title,description:post.description,image:post.imageurl})
      const d=res.data;
      console.log(d);
      setOpen(false)
      fetchposts();
    }
    const handlechange=(e)=>{
        setPost({...post,[e.target.name]:e.target.value});
    }

    const [open, setOpen] = useState(false);
    return (
      <>
        <IconButton onClick={()=>{setOpen(true)}}>
          <EditNote />
        </IconButton>
       
        <SytledModal
          open={open}
          onClose={(e) => setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            width={600}
            height={600}
            bgcolor={"background.default"}
            color={"text.primary"}
            p={3}
            borderRadius={5}
          >
            <Typography variant="h6" color="gray" textAlign="center">
              Update post
            </Typography>
            <UserBox>
              <Avatar
              
              >{user?.name?.charAt(0)}</Avatar>
              <Typography fontWeight={500} variant="span">
               {user?.name}
              </Typography>
            </UserBox>
            <Typography fontWeight={500} variant="span">
              Title
              </Typography>
            <TextField
              sx={{ width: "100%" }}
              id="standard-multiline-static"
              multiline
              rows={1}
              placeholder="What's on your mind?"
              variant="standard"
              name="title"
              value={post.title}
              onChange={handlechange}
            />
            
            {/* <div className="m-5">fdfdb</div> */}
               <Typography fontWeight={500} variant="span">
               Description
              </Typography>
            <TextField
              sx={{ width: "100%" }}
              id="standard-multiline-static"
              multiline
              rows={2}
              placeholder="What's on your mind?"
              variant="standard"
              name="description"
              value={post.description}
              onChange={handlechange}
            />
               <Typography fontWeight={500} variant="span">
               Image Url
              </Typography>
            <TextField
              sx={{ width: "100%" }}
              id="standard-multiline-static"
              multiline
              rows={1}
              name="imageurl"
              placeholder="What's on your mind?"
              variant="standard"
              value={post.imageurl}
              onChange={handlechange}
            />
            <Stack direction="row" gap={1} mt={2} mb={3}>
              <EmojiEmotions color="primary" />
              <Image color="secondary" />
              <VideoCameraBack color="success" />
              <PersonAdd color="error" />
            </Stack>
            <ButtonGroup
              fullWidth
              variant="contained"
              aria-label="outlined primary button group"
            >
              <Button onClick={handleupdate} >Update</Button>
              {/* <Button sx={{ width: "100px" }}>
                <DateRange />
              </Button> */}
            </ButtonGroup>
          </Box>
        </SytledModal>
      </>
    );
  };
  
  export default Edit;
  