import {
    
    Box
    
  } from "@mui/material";


  import React from "react";
  import WeatherCard from "../../WeatherComp/Wcard";
  const Rightbar = () => {
    return (
        <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
          <WeatherCard/>
         </Box>    
    );
  };
  
  export default Rightbar;
  