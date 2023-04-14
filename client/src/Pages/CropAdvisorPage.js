import {
    Box,
    Container,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
  } from "@chakra-ui/react";
  import react,{ useEffect } from "react";
  import Navbar from "../components/UI/Navbar"

  import CropInputForm from "../components/Utilities/cropAdvisor";
  // import './CropAdvisor.css'

function CropAdvisorPage() {

    return (
      <div className="cropAdvisor">
        <Navbar/>
          <Container
              maxW="65vw"
              centerContent
              m="unset"
              alignItems="baseline"
              // bg="rgba(71, 71, 71, 0.5)"
              h="100vh"
              pl="15vw"
              pr="15vw"
              className="cropadvisor"
          >
          <Box
            d="flex"
            justifyContent="center"
            p={3}
            w="100%"
            m="40px 0 15px 0"
            borderRadius="lg"
            borderWidth="1px"
            borderColor="transparent"
            color="white"
            // box-sghadow
          >
          <Text style={{color:'white'}} fontSize="4xl" fontFamily="Work sans">
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
          >
              <CropInputForm />
              {/* <Tabs isFitted variant="soft-rounded">
              <TabList mb="1em">
                <Tab color="white">Login</Tab>
                <Tab color="white">Sign Up</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                </TabPanel>
              </TabPanels>
            </Tabs> */}
          </Box>
        </Container>
      </div>
    )
}  

  export default CropAdvisorPage