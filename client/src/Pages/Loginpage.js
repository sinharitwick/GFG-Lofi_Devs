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
import { useEffect } from "react";
import { useNavigate } from "react-router";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";

function Homepage() {
  const history = useNavigate();

  // useEffect(() => {
  //   const user = JSON.parse(localStorage.getItem("userInfo"));

  //   if (user) history("/");
  // }, [history]);

  return (
    <div className="LoginPage">
      <Container maxW="xl" centerContent>
        <Box
          d="flex"
          justifyContent="center"
          p={3}
          bg="rgba(71, 71, 71, 0.5);"
          w="100%"
          m="40px 0 15px 0"
          borderRadius="lg"
          borderWidth="1px"
          color="white"
        >
          <Text fontSize="4xl" fontFamily="Work sans">
            FarmStack
          </Text>
        </Box>
        <Box
          bg="rgba(71, 71, 71, 0.5);"
          w="100%"
          p={4}
          borderRadius="lg"
          borderWidth="1px"
          color="white"
        >
          <Tabs isFitted variant="soft-rounded">
            <TabList mb="1em">
              <Tab color="white">Login</Tab>
              <Tab color="white">Sign Up</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Login />
              </TabPanel>
              <TabPanel>
                <Signup />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
    </div>
  );
}

export default Homepage;
