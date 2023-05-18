import {
    Box,
    Container,
    Text,
    useMediaQuery
} from "@chakra-ui/react";
import React, { useState } from 'react'
import './CropAdvisor.css'
import Navbar from '../components/UI/Navbar'
import CropAdvisorForm from '../components/Utilities/cropAdvisor';
import CropResult from '../components/Utilities/cropResult';

const CropAdvisorPage = () => {
    const [cropResult, setCropResult] = useState(null);
    const [isLargerThanMd] = useMediaQuery("(min-width: 768px)");

    const handleCropPrediction = (result) => {
        setCropResult(result);
    };
    return (
        <div className='cropAdvisor'>
            <Navbar />
            <Box className="cropAdvResp" style={{ display: 'flex', height: '100vh' }}>
                <Container
                    d="flex"
                    flex="50%"
                    maxW="53vw"
                    centerContent
                    m="unset"
                    alignItems="baseline"
                    // bg="rgba(71, 71, 71, 0.5)"
                    h="100vh"
                    pl="10vw"
                    pr="10vw"
                    className="cropadvisor"
                >
                    <Box
                        d="flex"
                        justifyContent="center"
                        p={3}
                        w="100%"
                        // m="40px 0 15px 0"
                        borderRadius="lg"
                        borderWidth="1px"
                        borderColor="transparent"
                        color="white"
                    // box-sghadow
                    >
                        <Text style={{ color: "white" }} fontSize="4xl" className="croptext">
                            Crop Advisor
                        </Text>
                    </Box>
                        <Box
                            w="100%"
                            p={4}
                            borderRadius="lg"
                            borderWidth="1px"
                            color="black"
                            borderColor="transparent"
                            className="cropform"
                            style={{ flex: '0 0 60%'}}
                            >

                    
                            <CropAdvisorForm onCropPrediction={handleCropPrediction} />
                        </Box>
                    
                </Container>
                <Container>
                    <Box
                        d="flex"
                        justifyContent="center"
                        p={3}
                        w="100%"
                        // m="40px 0 15px 0"
                        borderRadius="lg"
                        borderWidth="1px"
                        borderColor="transparent"
                        color="white"
                    // box-sghadow
                    >
                        <Text style={{ color: "white" }} fontSize="4xl" className="croptext">
                            Our Prediction
                        </Text>
                    </Box>
                    <Box
                        w="100%"
                        p={4}
                        borderRadius="lg"
                        borderWidth="1px"
                        color="black"
                        borderColor="transparent"
                        // className="cropform"
                        style={{ flex: "0 0 40%"}}>
                        <CropResult result={cropResult} />
                        
                    </Box>
                </Container>
            </Box>
        </div>
    )
}

export default CropAdvisorPage