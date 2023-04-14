import { Box, Stack, Skeleton } from "@mui/material";
import React, { useState } from "react";
import Post from "./Post";

const Feed = ({blogs,user,fetchposts}) => {
  const [loading, setLoading] = useState(true);
console.log(blogs);
  setTimeout(() => {
    setLoading(false);
  }, [3000]);

  return (
    <Box flex={4} p={{ xs: 0, md: 2 }}>
      {loading ? (
        <Stack spacing={1}>
          <Skeleton variant="text" height={100} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="rectangular" height={300} />
        </Stack>
      ) : (
        <>
          
     { blogs?.map((e,i)=>{
          return <div key={i}>
            <Post data={e} user={user}  fetchposts={fetchposts}/>
          </div>
      })}
        </>
      )}
    </Box>
  );
};

export default Feed;
