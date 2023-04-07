import { Box,Flex } from "@chakra-ui/react";
import React from "react";
import Avatar from "../profile/Avatar";

export default function singleComment() {
  
  return (
     <Box px="2" maxW="600px" mx="auto" textAlign="left">
       <Flex pb="2">
       <Avatar />
       <Box flex="1" ml="4">
         <Flex>
          
         </Flex>
       </Box>
       </Flex>
     </Box>
  );
}
