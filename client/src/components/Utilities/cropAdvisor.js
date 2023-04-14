import React, { useState, useEffect } from 'react';
import {
    Box,
    FormControl,
    FormLabel,
    Input,
    Select,
    Button,
    Heading,
    Center,
    Spinner,
} from "@chakra-ui/react";
import './cropadvisor.css'
const getLocation = require('./currentLoc');

const CropInputForm= () =>{
    const [climate, setClimate] = useState('');
    const [soil, setSoil] = useState('');
    const [crops, setCrops] = useState('');
    const [month, setMonth] = useState('');
    const [isLoading, setLoading] = useState(false);
    const [location, setLocation] = useState('');
  
    useEffect(() => {
      const getUserLocation = async () => {
        try {
          const userLocation = await getLocation();
          setLocation(userLocation.city);
        } catch (error) {
          console.error(error);
        }
      };
      getUserLocation();
    }, []);
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      setLoading(true);
      try {
        const response = await fetch('http://localhost:5000/api/cropAdvisor', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            location,
            climate,
            soil,
            month
          })
        });
        const result = await response.json();
        setCrops(result.crops);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };
  
    const handleLocationChange = (event) => {
      setLocation(event.target.value);
    }

  return (
    <div className='cropadvisor'>

        <Box>
        <form onSubmit={handleSubmit}>
            <FormControl>
            <FormLabel style={{color:'white'}}>Location:</FormLabel>
            <Input
                type="text"
                value={location}
                onChange={handleLocationChange}
                style={{color:'white'}}
                placeholder="Enter Location"
            />
            </FormControl>

            <FormControl mt={4} isRequired>
            <FormLabel>Climate:</FormLabel>
            <Select
                value={climate}
                onChange={(event) => setClimate(event.target.value)}
                placeholder="Select Climate"
            >
                <option value="Tropical">Tropical</option>
                <option value="Semi-Arid">Semi-Arid</option>
                <option value="Arid">Arid</option>
                <option value="Subtropical">Subtropical</option>
                <option value="Moderate">Moderate</option>
            </Select>
            </FormControl>

            <FormControl mt={4} isRequired>
            <FormLabel>Soil:</FormLabel>
            <Select
                value={soil}
                onChange={(event) => setSoil(event.target.value)}
                placeholder="Select Soil"
            >
                <option value="Sandy">Sandy</option>
                <option value="Clay">Clay</option>
                <option value="Red">Red</option>
                <option value="Black">Black</option>
                <option value="Silty">Silty</option>
                <option value="Alluvial">Alluvial</option>
            </Select>
            </FormControl>

            <FormControl mt={4} isRequired>
            <FormLabel>Month:</FormLabel>
            <Select
                value={month}
                onChange={(event) => setMonth(event.target.value)}
                placeholder="Select Month"
            >
                <option value="Jan">January</option>
                <option value="Feb">February</option>
                <option value="Mar">March</option>
                <option value="Apr">April</option>
                <option value="May">May</option>
                <option value="Jun">June</option>
                <option value="Jul">July</option>
                <option value="Aug">August</option>
                <option value="Sep">September</option>
                <option value="Oct">October</option>
                <option value="Nov">November</option>
                <option value="Dec">December</option>
            </Select>
            </FormControl>

            <Center mt={6}>
        <Button
            colorScheme="green"
            px={8}
            type="submit"
            disabled={!location || !climate || !soil || !month || isLoading}
        >
            {isLoading ? <Spinner /> : "Predict Crop"}
        </Button>
        </Center>
    </form>

    {crops && (
        <Box mt={6}>
        <Heading as="h2" size="lg" style={{color:'white'}}>
            Predicted Crop: {crops}
        </Heading>
        </Box>
    )}
    </Box>
    </div>
);
};

export default CropInputForm;
