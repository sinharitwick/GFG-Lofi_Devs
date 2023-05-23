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


// import React from "react";
// import { Box, Heading, SimpleGrid, Flex, Text, Link } from "@chakra-ui/react";
// import cropImagesData from "../../cropImages.json";
// import { Link as RouterLink } from "react-router-dom";
// import './cropadvisor.css'

// const CropResult = ({ result }) => {
//   let cropArray = [];

//   if (typeof result === "string") {
//     cropArray = result.split(", ");
//   } else if (Array.isArray(result)) {
//     cropArray = result;
//   }
//   console.log(result);

//   return (
//     <Box p="0rem" borderRadius="10px" mt={0}>
//       <Heading as="h4" size="lg" fontWeight="base" style={{ color: "black" }}>
//         {cropArray.length ? (
//           <SimpleGrid columns={2} spacing={5}>
//             {cropArray.map((crop, index) => (
//                 <Flex
//                   alignItems="center"
//                   justifyContent="center"
//                   p={4}
//                   bgImage={`url(${process.env.PUBLIC_URL}${cropImagesData[crop]})`}
//                   bgSize="cover"
//                   bgPosition="center"
//                   borderRadius="10px"
//                   borderWidth="1px"
//                   borderColor="transparent"
//                   boxShadow="1px 7px 31px 3px rgba(0,0,0,0.75);"
//                   minHeight="7rem"
//                   transition="transform 0.3s"
//                   _hover={{ transform: "scale(1.1)" }}
//                 >
//                   <Text fontSize="md" fontWeight="semibold" style={{color:"cornsilk",fontSize:"x-large"}}>
//                     {crop}
//                   </Text>
//                 </Flex>
              
//             ))}
//           </SimpleGrid>
//         ) : (
//           <Box
//           w="100%"
//           p={4}
//           borderRadius="lg"
//           borderWidth="1px"
//           color="black"
//           borderColor="transparent"
//           className="predictionBox"
//           style={{paddingBottom: '6rem',     background: '#51515147'}}>
//             <p className="instructiontext" style={{marginTop:"4rem"}}>
//               <span style={{fontFamily:"monospace"}}>Cropadvisor Instructions</span>
//               <ol style={{marginTop: "1rem",
//       fontSize: "22px"}}>
//                 <li>1. Enter location</li>
//                 <li>2. Select the climate of that location</li>
//                 <li>3. Select the Soil Type of your area</li>
//                 <li>4. Select the time of the year</li>
//               </ol>
//             </p>

//           </Box>
//         )}
//       </Heading>
//     </Box>
//   );
// };

// export default CropResult;



import React from "react";
import { Box, Heading, SimpleGrid, Flex, Text } from "@chakra-ui/react";
import cropImagesData from "../../cropImages.json";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton } from "@chakra-ui/react";
import cropData from "../../cropData.json";
import './cropadvisor.css';

const CropResult = ({ result }) => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [selectedCrop, setSelectedCrop] = React.useState("");
  const [cropContent, setCropContent] = React.useState({});

  const openModal = (crop) => {
    setSelectedCrop(crop);
    setCropContent(cropData[crop]);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedCrop("");
    setCropContent({});
    setModalOpen(false);
  };

  let cropArray = [];

  if (typeof result === "string") {
    cropArray = result.split(", ");
  } else if (Array.isArray(result)) {
    cropArray = result;
  }
  console.log(result);

  return (
    <Box p="0rem" borderRadius="10px" mt={0}>
      <Heading as="h4" size="lg" fontWeight="base" style={{ color: "black" }}>
        {cropArray.length ? (
          <SimpleGrid columns={2} spacing={5}>
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
                minHeight="7rem"
                transition="transform 0.3s"
                _hover={{ transform: "scale(1.1)", cursor: 'pointer' }}
                onClick={() => openModal(crop)}
              >
                <Text fontSize="md" fontWeight="semibold" style={{ color: "cornsilk", fontSize: "x-large" }}>
                  {crop}
                </Text>
              </Flex>
            ))}
          </SimpleGrid>
        ) : (
          <Box
            w="100%"
            p={4}
            borderRadius="lg"
            borderWidth="1px"
            color="black"
            borderColor="transparent"
            className="predictionBox"
            style={{ paddingBottom: '6rem', background: '#51515147' }}
          >
            <p className="instructiontext" style={{ marginTop: "4rem" }}>
              <span style={{ fontFamily: "monospace" }}>Cropadvisor Instructions</span>
              <ol style={{ marginTop: "1rem", fontSize: "22px" }}>
                <li>1. Enter location</li>
                <li>2. Select the climate of that location</li>
                <li>3. Select the Soil Type of your area</li>
                <li>4. Select the time of the year</li>
              </ol>
            </p>
          </Box>
        )}
      </Heading>

      <Modal isOpen={modalOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent className="modalcontent">
          <ModalHeader>{selectedCrop}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
  {cropContent.description && <Text>{cropContent.description}</Text>}
  {cropContent.image && <img src={cropContent.image} alt={selectedCrop} />}
  {cropContent.growingConditions && (
    <>
      <Heading as="h3" size="md" mt={4} mb={2}>
        Growing Conditions:
      </Heading>
      <Text>{cropContent.growingConditions}</Text>
    </>
  )}
  {cropContent.cultivationPractices && (
    <>
      <Heading as="h3" size="md" mt={4} mb={2}>
        Cultivation Practices:
      </Heading>
      <Text>{cropContent.cultivationPractices}</Text>
    </>
  )}
  {cropContent.yieldAndHarvesting && (
    <>
      <Heading as="h3" size="md" mt={4} mb={2}>
        Yield and Harvesting:
      </Heading>
      <Text>{cropContent.yieldAndHarvesting}</Text>
    </>
  )}
  {cropContent.commonVarieties && cropContent.commonVarieties.length > 0 && (
    <>
      <Heading as="h3" size="md" mt={4} mb={2}>
        Common Varieties:
      </Heading>
      <ul>
        {cropContent.commonVarieties.map((variety, index) => (
          <li key={index}>{variety}</li>
        ))}
      </ul>
    </>
  )}
</ModalBody>

        </ModalContent>
      </Modal>
    </Box>
  );
};

export default CropResult;





















