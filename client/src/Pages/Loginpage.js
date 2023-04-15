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
import { useHistory } from "react-router";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
import { Link } from "react-router-dom";

function Homepage() {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/");
  }, [history]);

  return (
    <div className="LoginPage">
      <Container
        maxW="65vw"
        centerContent
        m="unset"
        alignItems="baseline"
        bg="rgba(71, 71, 71, 0.5)"
        h="100vh"
        pl="15vw"
        pr="15vw"
        className="mylogin"
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
        >
          <Text fontSize="4xl" fontFamily="Work sans">
            <Link to="/">FarmStack</Link>
            
          </Text>
        </Box>
        <Box
          w="100%"
          p={4}
          borderRadius="lg"
          borderWidth="1px"
          color="white"
          borderColor="transparent"
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
