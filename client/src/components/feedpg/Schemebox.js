import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {  Stack, Skeleton } from "@mui/material";

function Schemebox() {
  const [schemes, setSchemes] = useState([]);
  const [currentSchemeIndex, setCurrentSchemeIndex] = useState(0);
  const [showAllSchemes, setShowAllSchemes] = useState(false);
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, [3000]);

  useEffect(() => {
    const fetchSchemes = async () => {
      const res = await axios.get('http://34.131.124.34:5000/api/schemes');
      setSchemes(res.data);
    };
    fetchSchemes();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSchemeIndex(currentIndex => (currentIndex + 1) % schemes.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [schemes]);

//   const handleMoreClick = () => {
//     setShowAllSchemes(true);
//   };

  return (
    <>
    {loading ? (
        <Stack spacing={1}>
          <Skeleton variant="rectangular" height={230} width={280} />
        </Stack>
    ) : (
     <Box className='w-20 h-56 m-4 overflow-hidden ... border rounded-lg border-gray-300 bg-gradient-to-br shadow-xl shadow-gray-400' sx={{ minWidth: 275 }}>
        {schemes.length > 0 && (
            <Card variant="outlined">
                <React.Fragment>
                  <CardContent>
                    <Typography className='text-sky-400/100'>
                        Schemes
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {schemes[currentSchemeIndex].category}
                    </Typography>
                    <Typography variant="h6" component="div">
                    {schemes[currentSchemeIndex].title}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary" className='truncate'>
                    {schemes[currentSchemeIndex].description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <a href={schemes[currentSchemeIndex].link} target='_blank'><Button size="small">See Details</Button></a>
                  </CardActions>
                </React.Fragment>
            </Card>
        )}
     </Box>
    )}
     </>
  );
}

export default Schemebox;

      {/* {schemes.length > 0 && (
        <div>
          {!showAllSchemes && (
            <div>
              <h2>{schemes[currentSchemeIndex].title}</h2>
              <p>{schemes[currentSchemeIndex].description}</p>
              <button onClick={handleMoreClick}>More</button>
            </div>
          )}
          {showAllSchemes && (
            <div>
              {schemes.map((scheme) => (
                <div key={scheme.id}>
                  <h2>{scheme.title}</h2>
                  <p>{scheme.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div> */}