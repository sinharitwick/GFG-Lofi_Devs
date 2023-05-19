// import React from "react";
// import { Box, Heading } from "@chakra-ui/react";

// const CropResult = ({ result }) => {
//   return (
//     <Box p="1rem" borderRadius="10px" mt={6}>
//       <Heading as="h4" size="lg" fontWeight="base" style={{ color: "black"}}>
//         {result || "No prediction yet"}
//       </Heading>
//     </Box>
//   );
// };

// export default CropResult;


import React from "react";
import { Box, Heading, SimpleGrid, Flex, Text } from "@chakra-ui/react";
import cropImagesData from "../../cropImages.json";

const CropResult = ({ result }) => {
  let cropArray = [];

  if (typeof result === "string") {
    cropArray = result.split(", ");
  } else if (Array.isArray(result)) {
    cropArray = result;
  }

  return (
    <Box p="0rem" borderRadius="10px" mt={0}>
      <Heading as="h4" size="lg" fontWeight="base" style={{ color: "black" }}>
        {cropArray.length ? (
          <SimpleGrid columns={3} spacing={4}>
            {cropArray.map((crop, index) => (
              <Flex
                key={index}
                alignItems="center"
                justifyContent="center"
                p={4}
                bgImage={`url(${process.env.PUBLIC_URL}${cropImagesData[crop]})`}
                bgSize="cover"
                bgPosition="center"
                borderRadius="10px"
                borderWidth="1px"
                borderColor="transparent"
                boxShadow="1px 7px 31px 3px rgba(0,0,0,0.75);"
                minHeight="5.5rem"
                transition="transform 0.3s"
                _hover={{ transform: "scale(1.1)" }}
              >
                <Text fontSize="md" fontWeight="semibold" color="white">
                  {crop}
                </Text>
              </Flex>
            ))}
          </SimpleGrid>
        ) : (
          "No prediction yet"
        )}
      </Heading>
    </Box>
  );
};

export default CropResult;



















