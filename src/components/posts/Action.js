import { Flex, IconButton } from "@chakra-ui/react";
import React from "react";
import {FaRegHeart,FaHeart} from "react-icons/fa"

export default function Action({post}) {

  const {} = post;

  return (
    <Flex p="2">
     
     <Flex alignItems="center">
      <IconButton 
      size="md" 
      colorScheme="red" 
      variant="ghost"
      icon={<FaRegHeart/>}
      isRound
      />
      5
     </Flex>

    </Flex>
  );
}
