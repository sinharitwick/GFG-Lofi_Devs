import React, { useState, useEffect } from "react";
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
import "./cropadvisor.css";
const getLocation = require("./currentLoc");

const CropAdvisorForm = ({ onCropPrediction }) => {
  const [climate, setClimate] = useState("");
  const [soil, setSoil] = useState("");
  const [crops, setCrops] = useState("");
  const [month, setMonth] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [location, setLocation] = useState("");

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
      const response = await fetch("http://34.131.168.190:5000/api/cropAdvisor", {
      // const response = await fetch("http://localhost:5000/api/cropAdvisor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          location,
          climate,
          soil,
          month,
        }),
      });
      const result = await response.json();
      // setCrops(result.crops);
      // onCropPrediction(result.crops); // Pass the crop prediction result to the parent component
      const cropString = result.crops.join(', ');
      setCrops(cropString);
      onCropPrediction(cropString);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const handleLocationChange = (event) => {
    const newLocation = event.target.value;
    setLocation(newLocation);
  };

  return (
    <div className="cropadvisor">
      <Box>
      <form onSubmit={handleSubmit} style={{color:"white"}}>
          <FormControl isRequired>
            <FormLabel style={{ color: "white" }}>Location:</FormLabel>
            <Input
              type="text"
              value={location}
              onChange={handleLocationChange}
              placeholder={location ? location : "Enter Location"}
              style={{ color: "black" , background:"#d6d0d085"}}
            />
          </FormControl>

          <FormControl mt={4} isRequired>
            <FormLabel>Climate:</FormLabel>
            <Select
              value={climate}
              onChange={(event) => setClimate(event.target.value)}
              placeholder="Select Climate"
              style={{ color: "black" , background:"#d6d0d085"}}
            >
              <option className = "dropdown" value="Tropical">Tropical</option>
              <option className = "dropdown" value="Semi-Arid">Semi-Arid</option>
              <option className = "dropdown" value="Arid">Arid</option>
              <option className = "dropdown" value="Subtropical">Subtropical</option>
              <option className = "dropdown" value="Moderate">Moderate</option>
              <option className = "dropdown" value="Dry">Dry</option>
            </Select>
          </FormControl>

          <FormControl mt={4} isRequired>
            <FormLabel>Soil:</FormLabel>
            <Select
              value={soil}
              onChange={(event) => setSoil(event.target.value)}
              placeholder="Select Soil"
              style={{ color: "black" , background:"#d6d0d085"}}
            >
              <option className = "dropdown" value="Sandy">Sandy</option>
              <option className = "dropdown" value="Clay">Clay</option>
              <option className = "dropdown" value="Red">Red</option>
              <option className = "dropdown" value="Black">Black</option>
              <option className = "dropdown" value="Silty">Silty</option>
              <option className = "dropdown" value="Alluvial">Alluvial</option>
              <option className = "dropdown" value="Laterite">Laterite</option>
            </Select>
          </FormControl>

          <FormControl mt={4} isRequired>
            <FormLabel>Month:</FormLabel>
            <Select
              value={month}
              onChange={(event) => setMonth(event.target.value)}
              placeholder="Select Month"
              style={{ color: "black" , background:"#d6d0d085"}}
            >
              <option className = "dropdown" value="Jan">January</option>
              <option className = "dropdown" value="Feb">February</option>
              <option className = "dropdown" value="Mar">March</option>
              <option className = "dropdown" value="Apr">April</option>
              <option className = "dropdown" value="May">May</option>
              <option className = "dropdown" value="Jun">June</option>
              <option className = "dropdown" value="Jul">July</option>
              <option className = "dropdown" value="Aug">August</option>
              <option className = "dropdown" value="Sep">September</option>
              <option className = "dropdown" value="Oct">October</option>
              <option className = "dropdown" value="Nov">November</option>
              <option className = "dropdown" value="Dec">December</option>
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
        {/* Crop result */}
        {/* {crops && (
          <Box bg="white" p="0.5rem" borderRadius="10px" mt={6}>
            <Heading as="h4" size="lg" fontWeight="base" style={{ color: "black" }}>
              Predicted Crop: {crops}
            </Heading>
          </Box>
        )} */}
      </Box>
    </div>
  );
};

export default CropAdvisorForm;
