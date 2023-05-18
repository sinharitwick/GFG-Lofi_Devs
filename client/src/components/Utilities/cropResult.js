import React from "react";
import { Box, Heading } from "@chakra-ui/react";

const CropResult = ({ result }) => {
  return (
    <Box p="1rem" borderRadius="10px" mt={6}>
      <Heading as="h4" size="lg" fontWeight="base" style={{ color: "black"}}>
        Crop Result: {result || "No prediction yet"}
      </Heading>
    </Box>
  );
};

export default CropResult;
