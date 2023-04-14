import {
    Avatar,
    Button,
    Card,
    Stack,
    TextField,
    ThemeProvider,
  } from "@mui/material";
  import { Box } from "@mui/system";
  import React, {useState } from "react";


  
  const AddComments = () => {
    
    const [commentTxt, setCommentTxt] = useState("");
    
  
    return (
      <ThemeProvider >
        <Card>
          <Box sx={{ p: "15px" }}>
            <Stack direction="row" spacing={2} alignItems="flex-start">
              <Avatar
                src={"https://c.ndtvimg.com/2021-10/gjo8hnng_ms-dhoni-ipl_625x300_07_October_21.jpg"}
                variant="rounded"
                alt="user-avatar"
              />
              <TextField
                multiline
                fullWidth
                minRows={4}
                id="outlined-multilined"
                placeholder="Add a comment"
                value={commentTxt}
                onChange={(e) => {
                  setCommentTxt(e.target.value);
                }}
              />
              <Button variant="contained"
                size="large"
                sx={{
                  bgcolor: "custom.moderateBlue",
                  color: "neutral.white",
                  p: "8px 25px",
                  "&:hover": {
                    bgcolor: "custom.lightGrayishBlue",
                  },
                }}
                onClick={(e) => {
                 
                  setCommentTxt("");
                }}
              >
                Send
              </Button>
            </Stack>
          </Box>
        </Card>
      </ThemeProvider>
    );
  };
  
  export default AddComments;