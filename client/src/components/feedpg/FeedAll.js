import { Box, Stack, Skeleton } from "@mui/material";
import React, { useState } from "react";
import PostAll from "./PostAll";

const Feed = ({blogsall,fetchposts}) => {
  const [loading, setLoading] = useState(true);
console.log(blogsall);
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
          
     { blogsall?.map((e,i)=>{
          return <div key={i}>
            <PostAll data={e}   fetchposts={fetchposts}/>
          </div>
      })}
        </>
      )}
    </Box>
  );
};

export default Feed;
