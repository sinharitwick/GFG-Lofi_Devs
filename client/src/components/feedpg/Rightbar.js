import {
    
    Box
    
  } from "@mui/material";


  import React from "react";
  import WeatherCard from "../../WeatherComp/Wcard";
  import Schemebox from "./Schemebox";
  const Rightbar = () => {
    return (
        <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
          <Box position="fixed" >
          <Box p={3}> </Box>
          <WeatherCard />
          <Schemebox />
         </Box>
         </Box>    
    );
  };
  
  export default Rightbar;
  