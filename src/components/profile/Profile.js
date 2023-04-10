import { Flex, HStack, Stack,Text } from "@chakra-ui/react";
import React from "react";
import Avatar from "./Avatar";

export default function Profile() {
  
  
    return (
        <Stack spacing="5">
          <Flex p={["4","6"]} pos="relative" align="center"> 
          <Avatar />
          <Stack ml="10">
           @username here
           
           <HStack spacing="10">
            <Text color="gray.100">

            </Text>
           </HStack>
          
          </Stack>
          </Flex>
        </Stack>
    );
}
