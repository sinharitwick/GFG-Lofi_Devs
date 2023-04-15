import {
    
    Box
    
  } from "@mui/material";


  import React from "react";
  import WeatherCard from "../../WeatherComp/Wcard";
  import Schemebox from "./Schemebox";
  const Rightbar = () => {
    return (
        <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
          <WeatherCard />
          <Schemebox />
         </Box>    
    );
  };
  
  export default Rightbar;
  